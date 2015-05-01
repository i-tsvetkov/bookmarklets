javascript: {
  function download_file(file) {
    var blob = new Blob([file.text], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
  }

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

  function extract_videos() {
    var videos = Array.prototype.slice.call(document.querySelectorAll('a.yt-uix-sessionlink.yt-uix-tile-link.spf-link.yt-ui-ellipsis.yt-ui-ellipsis-2'));
    videos = videos.map(function (v) { return { link: v.href, title: v.title }; });
    download_file({ name: document.title.replace(' - YouTube', '') + '_videos.json',
                    text: JSON.stringify({ videos: videos }, null, '\t') });
  }

  load_all(extract_videos, function () {
    var btn = document.querySelector('#channels-browse-content-grid ~ button');
    if (btn)
      btn.click();
    return btn != null;
  });
};
void(0);

