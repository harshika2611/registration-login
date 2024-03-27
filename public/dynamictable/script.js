//add row
document.getElementById("addrow").addEventListener('click', addrow);
function addrow() {
  let table = document.getElementById("myTable");
let rws = table.rows;
let cols = table.rows[0].cells.length;
  let row = table.insertRow(rws.length);
let cell;
for(let i=0;i<cols;i++){
  cell = row.insertCell(i);
  cell.innerHTML = 'new';
}

}
//dlt row
document.getElementById("dltrow").addEventListener('click', dltrow);
function dltrow(){
 document.getElementById("myTable").deleteRow(2);
 
}
//add col
document.getElementById("addcol").addEventListener('click', addcol);
function addcol(){
  let table=document.getElementById("myTable");
  let rws=table.rows;
  let cols=table.rows[0].cells.length;
  for(var i=0;i<rws.length;i++){
		cell = rws[i].insertCell(cols);
    cell.innerHTML="coll";
}
}
//dlt col
document.getElementById("dltcol").addEventListener('click', dltcol);

function dltcol(){
  let table=document.getElementById("myTable");
  let cols=table.rows.length;
  let index=2;
  for(let i=0; i<cols; i++){
    table.rows[i].deleteCell(index);
  }
}
