function insertTableRow() {
  const table = document.getElementById("table");
  
  const rows = table.rows.length;
  const columns = table.rows[rows - 1].cells.length;
  const newRow = table.insertRow(rows);

  for (i = 0; i < columns; i++) {
    let newCell = newRow.insertCell(i);
    newCell.innerHTML = "Nova Linha" ;
  }
}