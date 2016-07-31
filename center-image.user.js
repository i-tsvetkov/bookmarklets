// ==UserScript==
// @name Center Image
// @version 0.2
// @description Centers the image when is alone in a tab.
// @match http://*/*
// @match https://*/*
// @match file://*/*
// ==/UserScript==

if (document.images.length === 1 && document.images[0].src === document.URL
    && document.images[0].hasAttribute('src')
    && document.images[0].getAttribute('src') !== '')
{
  document.body.style.background     = '#212121';
  document.body.style.display        = 'flex';
  document.body.style.flexDirection  = 'column';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems     = 'center';
  document.images[0].style.background = '#FAFAFA';
  document.images[0].style.margin     = 'auto';
}

