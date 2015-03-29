javascript: {
  function load_all() {
    var i = setInterval(function() {
              if (document.querySelectorAll("._359.img").length == 1
                  || (document.querySelectorAll("#browse_end_of_results_footer").length == 0
                      && document.querySelectorAll("._akq").length == 1))
                window.scrollTo(0, document.body.scrollHeight);
              else
                clearInterval(i);
            },
            100);
  }
};
void(0);

