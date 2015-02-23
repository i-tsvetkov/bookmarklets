javascript: {
  function download_file(file) {
    var blob = new Blob([file.text], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
  }
  function extract_url(p) {
    return unescape(p.getAttribute("ajaxify").match(/[?&]src=([^&]+)&?/)[1]);
  }
  var urls = [];
  var photos = document.getElementsByClassName("uiMediaThumb _6i9 uiMediaThumbMedium");
  if (photos.length == 0)
    photos = document.getElementsByClassName("_23q");
  for (var i = 0; i < photos.length; i++) {
    urls.push(extract_url(photos[i]));
  }
  download_file({ name: document.title + "_photos.txt", text: urls.join("\n") });
};
void(0);
