javascript: {
  function download_file(file) {
    var blob = new Blob([file.text], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
  }

  function load_all(callback, test_func) {
    var i = setInterval(function() {
              if (test_func())
                window.scrollTo(0, document.body.scrollHeight);
              else {
                clearInterval(i);
                callback();
              }
            },
            100);
  }

  function extract_friends() {
    var friends = [];
    var user_friends = document.querySelectorAll(".fsl.fwb.fcb > a");

    for (var i = 0; i < user_friends.length; i++) {
      var name = user_friends[i].textContent;
      var id   = JSON.parse(user_friends[i].getAttribute("data-gt")).engagement.eng_tid;
      friends.push({ name: name, id: id });
    }

    /* sort by name */
    friends.sort(function(a, b){ return a.name.localeCompare(b.name); });

    /* sort by name and id */
    /*friends.sort(function(a, b){ return a.name.localeCompare(b.name)
                                       || a.id.localeCompare(b.id); });*/

    /* sort by id */
    /*friends.sort(function(a, b){ return a.id.localeCompare(b.id); });*/

    download_file({ name: document.title + "_likes.json",
                    text: JSON.stringify({ friends: friends }, null, '\t') });
  }

  load_all(extract_friends, function(){ return document.querySelector(".pam.uiBoxLightblue.uiMorePagerPrimary"); });
};
void(0);
