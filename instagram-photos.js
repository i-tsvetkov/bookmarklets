javascript: {
  function download_file(file) {
    var blob = new Blob([file.text], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
  }
  var username = window._sharedData.entry_data.UserProfile[0].user.username;
  var req = new XMLHttpRequest();
  var pictures = [];
  req.onload = function(event) {
    var json = JSON.parse(event.target.responseText);
    pictures = pictures.concat(json.items);
    if (json.more_available) {
      var last_id = json.items[json.items.length - 1].id;
      event.target.open("GET", ["http://instagram.com/", username, "/media/?max_id=", last_id].join(""));
      event.target.send();
    }
    else {
      var urls = pictures.map(function(p) { return p.images.standard_resolution.url; }).join("\n");
      download_file({ name: username + "_photos.txt", text: urls });
    }
  };
  req.open("GET", ["http://instagram.com/", username, "/media/"].join(""));
  req.send();
};
void(0);
