function mOver(obj){
  obj.innerHTML="Full Name"
}
function mOut(obj){
  obj.innerHTML="Last Name"
}
function mDown(obj){
 obj.style.backgroundColor="green";
 obj.innerHTML="large";
}
function mUp(obj){
  obj.style.backgroundColor="white";
  obj.innerHTML="Designation"
}
function bL(){
  let x=document.getElementById('add1');
  x.value=x.value.toUpperCase();
}