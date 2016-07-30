javascript: {
  var id = document.querySelector("a.profilePicThumb").href.match(/profile_id=(\d+)$/)[1];
  var url = "https://graph.facebook.com/" + id + "/picture?width=99999&height=99999";
  window.open(url);
};
void(0);

