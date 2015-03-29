javascript: {
  var id = document.URL.match(/facebook.com\/(profile.php\?id=(\d+)|([^?&]+))/);
  id = (id && id.length == 4) ? id[2] || id[3] : "";
  var url = "https://graph.facebook.com/" + id + "/picture?width=99999&height=99999";
  window.open(url);
};
void(0);

