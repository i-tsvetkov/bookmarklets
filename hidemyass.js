javascript: {
  function download_file(file) {
    var blob = new Blob([file.text], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
  }

  function get_ip(row) {
    var children = Array.prototype.slice.call(row.cells[1].children[0].children);
    children.filter(x => getComputedStyle(x).display == 'none')
            .map(x => x.remove());
    var ip = row.cells[1].textContent.trim();
    var port = row.cells[2].textContent.trim();
    var protocol = row.cells[6].textContent.toLowerCase().trim();
    return [protocol, '://', ip, ':', port].join('');
  }

  var table = document.getElementById('listable');
  var rows  = Array.prototype.slice.call(table.rows);
  rows.shift();
  download_file({ name: 'ips.txt',
                  text: rows.map(get_ip).join('\n') });
};
void(0);
