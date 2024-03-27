
//table row add
function addrow() {
  let table = document.getElementById("myTable");
let rws = table.rows;
let cols = table.rows[0].cells.length;
  let row = table.insertRow(rws.length);
let cell;
for(let i=0;i<cols;i++){
  cell = row.insertCell(i).setAttribute("class", "col");

}
}
//table column add
function addcol(){
  let table=document.getElementById("myTable");
  let rws=table.rows;
  let cols=table.rows[0].cells.length;
  for(var i=0;i<rws.length;i++){
		cell = rws[i].insertCell(cols).setAttribute("class", "col");

}
}
//genrate random cell and give them to color and click
let score=0;
var ran;
let randomcolor;
function random(){
 var collen= document.getElementsByClassName("col").length;
  ran=Math.floor(Math.random() * collen);

  document.getElementsByClassName("col")[ran].setAttribute("onclick", "tds()");

  document.getElementsByClassName("col")[ran].setAttribute("style", "background-color:"+randomcolor+"D5");
}

rcolor();
random();
//onlick function
function tds(){
  addrow();
  addcol();
  document.getElementsByClassName("col")[ran].removeAttribute("onclick");
  document.getElementsByClassName("col")[ran].removeAttribute("style");

score++;
document.getElementById('scoreset').innerHTML="Score:"+score;
  rcolor();
random();
}
//random color generator
function rcolor(){
   randomcolor=getRandomColor();
   let cells=document.getElementsByClassName("col");
   for(let i=0; i<cells.length; i++){ 
    document.getElementsByClassName("col")[i].setAttribute("style", "background-color:" +randomcolor);
   }
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//for set timer
let count = 10;
alert("game begin");
const timer = setInterval(function() {
  count--;
  document.getElementById('timeset').innerHTML="timer:"+count;
  
  if (count === 0) {
    
    clearInterval(timer);
    document.getElementById('myTable').remove();
    alert("Time's up!");
  }
}, 1000);

