// ==UserScript==
// @match https://mbasic.facebook.com/profile/picture/view/*
// ==/UserScript==

var img = document.querySelector('#root img');
var user_id = document.URL.match(/profile_id=(\d+)/)[1]
var src = "https://graph.facebook.com/"
          + user_id
          + "/picture?width=99999&height=99999&redirect=true";

document.querySelector('#viewport').style.maxWidth = 'none';

img.style.maxWidth  = '100vw';
img.style.maxHeight = '100vh';
img.style.width     = 'auto';
img.style.height    = 'auto';

img.src = src;

