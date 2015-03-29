javascript: {
  function download_file(file) {
    var blob = new Blob([file.text], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
  }

  function load_all(callback) {
    var i = setInterval(function() {
              if (document.querySelectorAll("._359.img").length == 1
                  || (document.querySelectorAll("#browse_end_of_results_footer").length == 0
                      && document.querySelectorAll("._akq").length == 1))
                window.scrollTo(0, document.body.scrollHeight);
              else {
                clearInterval(i);
                callback();
              }
            },
            100);
  }

  function extract_url(p) {
    return unescape(p.getAttribute("ajaxify").match(/[?&]src=([^&]+)&?/)[1]);
  }

  function extract_photos() {
    var urls = [];
    var photos = document.getElementsByClassName("uiMediaThumb _6i9 uiMediaThumbMedium");
    if (photos.length == 0)
      photos = document.getElementsByClassName("_23q");
    for (var i = 0; i < photos.length; i++) {
      urls.push(extract_url(photos[i]));
    }
    download_file({ name: document.title + "_photos.txt", text: urls.join("\n") });
  }

  load_all(extract_photos);
};
void(0);
