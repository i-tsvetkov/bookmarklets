// ==UserScript==
// @match http://*/*
// @match https://*/*
// @match file://*/*
// ==/UserScript==

if (document.images.length === 1 && document.images[0].src === document.URL)
{
  document.body.style.background     = '#212121';
  document.body.style.display        = 'flex';
  document.body.style.flexDirection  = 'column';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems     = 'center';
  document.images[0].style.background = '#FAFAFA';
  document.images[0].style.margin     = 'auto';
}

