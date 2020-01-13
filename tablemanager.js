var body = document.body;
var table = document.createElement("TABLE");

function createTable(rows, columns, width, height, border) {
  for (x = 0; x < rows; x++) {
    var tr = document.createElement("TR");
    table.appendChild(tr);
    for (y = 0; y < columns; y++) {
      var td = document.createElement("TD");
      tr.appendChild(td);
    }
  }
  table.setAttribute("border", toString(border));
  table.style.height = height;
  table.style.width = width;
  body.appendChild(table);
}

function identifyCells() {
  var tr = table.getElementsByTagName("TR");
  for (x = 0; x < tr.length; x++) {
    var td = tr[x].getElementsByTagName("TD");
    for (y = 0; y < td.length; y++) {
      tr[x].getElementsByTagName("TD")[y].innerHTML += x + ", " + y;
    }
  }
  for (z = 0; z < table.getElementsByTagName("TD").length; z++) {
    table.getElementsByTagName("TD")[z].innerHTML += " (" + z + ")";
  }
}
