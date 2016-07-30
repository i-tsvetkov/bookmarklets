// ==UserScript==
// @match https://www.instagram.com/*/
// ==/UserScript==

(function () {
  var img = document.querySelector('img._8gpiy._r43r5');
  if (!img)
    return;
  var a = document.createElement('a');
  a.href = img.src.replace('/s150x150', '');
  a.target = '_blank';
  img.parentNode.appendChild(a);
  a.appendChild(img);
})();

