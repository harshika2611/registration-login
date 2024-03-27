var turn='X';

function start(){
alert('Start Game'); 
}

function reset(){
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1=document.getElementById('1').innerHTML = " ";
  b2=document.getElementById('2').innerHTML = " ";
  b3=document.getElementById('3').innerHTML = " ";
  b4=document.getElementById('4').innerHTML = " ";
  b5=document.getElementById('5').innerHTML = " ";
  b6=document.getElementById('6').innerHTML = " ";
  b7=document.getElementById('7').innerHTML = " ";
  b8=document.getElementById('8').innerHTML = " ";
  b9=document.getElementById('9').innerHTML = " ";
}

alert('Start Game'); 
function myfunc(element){
  
    if(element.innerHTML==""){
      
      element.innerHTML=turn;
      if(turn=='X'){
        turn='0';
      }
      else{
        turn='X';
      }
    }
  
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1=document.getElementById('1').innerHTML;
  b2=document.getElementById('2').innerHTML;
  b3=document.getElementById('3').innerHTML;
  b4=document.getElementById('4').innerHTML;
  b5=document.getElementById('5').innerHTML;
  b6=document.getElementById('6').innerHTML;
  b7=document.getElementById('7').innerHTML;
  b8=document.getElementById('8').innerHTML;
  b9=document.getElementById('9').innerHTML;

  if((b1=='X' && b2=="X" && b3=='X') || (b1=="X" && b5=='X' && b9=="X") || (b1=="X" && b4=="X" && b7=="X") || (b7=="X" && b8=="X" && b9=="X") || (b3=="X" && b6=="X" && b9=="X") || (b3=="X" && b5=="X" && b7=="X")  || (b4=="X" && b5=="X" && b6=="X") || (b2=="X" && b5=="X" && b8=="X")){
   alert('Player X Won');
  }
  else if((b1=='0' && b2=="0" && b3=='0') || (b1=="0" && b5=='0' && b9=="0") || (b1=="0" && b4=="0" && b7=="0") || (b7=="0" && b8=="0" && b9=="0") || (b3=="0" && b6=="0" && b9=="0") || (b3=="0" && b5=="0" && b7=="0")  || (b4=="0" && b5=="0" && b6=="0") || (b2=="0" && b5=="0" && b8=="0")){
    alert('player 0 Win')
  }
  else if((b1=='X' || b1=="0") && (b2=='X' || b2=="0") && (b3=='X' || b3=="0") && (b4=='X' || b4=="0") && (b5=='X' || b5=="0") && (b6=='X' || b6=="0") && (b7=='X' || b7=="0") && (b8=='X' || b8=="0") && (b9=='X' || b9=="0")){
    alert("it is a tie");
  }
}

