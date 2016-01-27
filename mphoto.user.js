// ==UserScript==
// @match https://mbasic.facebook.com/photo.php*
// ==/UserScript==

var img = document.querySelector('#root img');
var src = Array.prototype.slice.call(document.links)
          .filter(l => l.text == 'View Full Size')[0].href;

document.querySelector('#viewport').style.maxWidth = 'none';

img.style.maxWidth  = '100vw';
img.style.maxHeight = '100vh';
img.style.width     = 'auto';
img.style.height    = 'auto';

img.src = src;

