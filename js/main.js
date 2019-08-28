function tableCreate() {
  console.log("create table");
  var tbl = document.getElementById('pixels');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1000; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1000; j++) {
      var td = document.createElement('td');
      td.appendChild(document.createTextNode('\u0020'))
      tr.appendChild(td)
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
}
