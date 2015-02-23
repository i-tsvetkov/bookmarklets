function download_file(file) {
  var blob = new Blob([file.text], { type: "text/plain" });
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = file.name;
  link.click();
}
