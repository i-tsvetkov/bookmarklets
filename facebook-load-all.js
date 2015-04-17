javascript: {
  function load_all(callback, test_func) {
    var i = setInterval(function() {
              if (test_func())
                window.scrollTo(0, document.body.scrollHeight);
              else {
                clearInterval(i);
                callback();
              }
            },
            100);
  }
};
void(0);

