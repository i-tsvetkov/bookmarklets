javascript: {
  if (window.__rotate_img)
    window.__rotate_img();
  else {
    window.__rotate_img = function () {
      var deg = 0;
      return function () {
        deg = (deg + 90) % 360;
        document.images[0].style.transform = 'rotate(' + deg + 'deg)';
      };
    }();
    window.__rotate_img();
  }
};
void(0);

