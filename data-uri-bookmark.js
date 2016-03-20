javascript: {
  function img_to_b64(url, func) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');

      canvas.width  = this.width;
      canvas.height = this.height;

      ctx.drawImage(this, 0, 0);

      func(canvas.toDataURL());
      canvas = null;
    };

    img.src = url;
  }

  function b64encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  function b64decode(str) {
    return decodeURIComponent(escape(atob(str)));
  }

  function get_data(url, func) {
    var xhr = new XMLHttpRequest();
    xhr.onload = () => func(xhr.responseText);
    xhr.open('GET', url);
    xhr.send();
  }

  function generate() {
    var imgs = Array.prototype.slice.call(document.images);
    var csss = Array.prototype.slice.call(document.styleSheets).filter(s => s.href);
    var jss  = Array.prototype.slice.call(document.scripts).filter(s => s.src);
    var links = Array.prototype.slice.call(document.links);

    /* remove relative urls */
    links.map(l => l.href = l.href);

    var redirect = () => document.location = 'data:text/html;charset='
                                             + document.characterSet + ','
                                             + encodeURIComponent(document.body.parentNode.outerHTML);

    var asem = (function (fire_func) {
      var lock = 0;
      var func = fire_func;

      var add = () => lock++;
      var rem = function () {
        lock--;
        if (lock == 0)
          func();
      };

      return function (f) {
        add();
        return function () {
          f.apply(this, arguments);
          rem();
        };
      };
    })(redirect);

    imgs.map(i => img_to_b64(i.src, asem(d => i.src = d)));
    csss.map(s => get_data(s.href, asem(d => s.href = 'data:text/css;base64,' + b64encode(d))));
    jss.map(s => get_data(s.src, asem(d => s.src = 'data:text/javascript;base64,' + b64encode(d))));

    var is_empty = (arr) => arr.length === 0;

    if (is_empty(imgs) && is_empty(csss) && is_empty(jss))
      redirect();
  }

  generate();

};
void(0);

