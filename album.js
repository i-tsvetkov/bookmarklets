javascript: {
  var pictures = document.querySelectorAll("#images h2");
  var links    = document.querySelectorAll("li a[href^=\"http://www.album.bg//images/\"]");

  for (var i = 0; i < links.length; i++) {
    var a = document.createElement("a");
    var pic_id = links[i].href.split("/")[5];
    a.href        = "#" + pic_id;
    a.textContent = pictures[i].textContent;
    a.id          = pic_id;
    pictures[i].innerHTML = a.outerHTML;
  }
};
void(0);
