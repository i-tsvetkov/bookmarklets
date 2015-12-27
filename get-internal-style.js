javascript: {
  function download_file(file) {
    var blob = new Blob([file.text], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => link.remove(), 1000);
  }

  var css = Array.prototype.slice.call(document.styleSheets)
            .map(s => s.ownerNode.innerHTML).join('\n');

  download_file({ name: 'style.css', text: css });
};
void(0);

