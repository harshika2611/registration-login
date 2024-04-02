const prev = document.getElementsByClassName(".btn-prev");
const next = document.getElementsByClassName(".btn-next");
const form = document.querySelectorAll(".form1");
let count = 0;

function nextFun() { 
   
    if(!validation()){
        console.log("return here");
      return false;
    };      
  if (count <= 6) {
    count++;
  }
  if (count == 6) {
    document.getElementById("next-btn").hidden = true;

  }
  updatesteps();

}

function validation(){
const text=document.getElementById('fname').value;
if(!text){
  errorMsg = "Enter valid input";
  document.getElementById('error_fname').innerHTML = errorMsg;
  document.getElementById('error_fname').style.color = 'red';
  return false;
}
return true;
}



function prevFun() {
  if (count >= 1) {
    count--;
  }
  if (count) {
    document.getElementById("next-btn").hidden = false;

  }
  updatesteps();
}

function updatesteps() {
  form.forEach((element) => {
    element.classList.contains("from-active") &&
      element.classList.remove("from-active");
  });
  form[count].classList.add("from-active");
}

async function updatebtn() {
  const id = window.location.pathname.split("/")[5];

  const form = document.getElementById("form");
  const formData = new FormData(form);
  const serialData = {};

  for (const [key, value] of formData.entries()) {

    if (serialData[key] != undefined) {

      serialData[key] += "," + value;
    }
    else {
      serialData[key] = value;
    }
  }
  const updateData = JSON.stringify(serialData);

  const response = await fetch(`${process.env.URL}/api/tasks/fetchInsertUpdate/update/${id}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: updateData,
  });


}

async function submitbtn() {
  const form = document.getElementById("form");
  const formData = new FormData(form);
  const serialData = {};

  for (const [key, value] of formData.entries()) {

    if (serialData[key] != undefined) {

      serialData[key] += "," + value;
    }
    else {
      serialData[key] = value;
    }
  }
  const data = JSON.stringify(serialData);
  const response = await fetch(`${process.env.URL}/api/tasks/fetchInsertUpdate`, {
    method: "post",

    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: data,
  });
  window.location.replace(`${process.env.URL}/api/tasks/fetchInsertUpdate/list`);

}

if (window.location.pathname.split("/").includes('update')) {
  fetchUpdate();
  document.getElementById("submit").hidden = true;
  document.getElementById("update").hidden = false;
}
else {
  document.getElementById("submit").hidden = false;
  document.getElementById("update").hidden = true;

}

async function fetchUpdate() {
  const path = window.location.pathname.split("/")[5];
  const response = await fetch(`${process.env.URL}/api/tasks/fetchInsertUpdate/data/${path}`);
  const result = await response.json();
 
  const key1 = Object.keys(result["basicdata"][0]);
  key1.forEach(element => {

    if (element == 'gd') {

      document.getElementById(result["basicdata"][0].gd).checked = true;
    } else {
      document.getElementsByName(element)[0].value = result["basicdata"][0][element];
    }
  });


  const key2 = Object.keys(result["edudata"]);
  key2.forEach((i) => {
    const datakey2 = Object.keys(result["edudata"][i]);
    datakey2.forEach(element => {

      document.getElementsByName(element)[i].value = result["edudata"][i][element];

    });
  });



  const key3 = Object.keys(result["work"]);
  key3.forEach((i) => {
    const datakey3 = Object.keys(result["work"][i]);
    datakey3.forEach(element => {
      document.getElementsByName(element)[i].value = result["work"][i][element];
    });
  });



  const key4 = Object.keys(result["referance"]);

  key4.forEach((i) => {
    const datakey4 = Object.keys(result["referance"][i]);
    datakey4.forEach(element => {
    
      document.getElementsByName(element)[i].value = result["referance"][i][element];

    });
  });

  if (result["preferance"][0] != undefined) {

    const key5 = Object.keys(result["preferance"][0]);
    key5.forEach(element => {
      document.getElementsByName(element)[0].value = result["preferance"][0][element];
    });
  }

  const key6 = Object.keys(result["lang"]);
  console.log(key6);
  key6.forEach((i) => {
    console.log(i);
    const datakey6 = Object.values(result["lang"][i]);
    console.log(datakey6, "arr");
    console.log(result["lang"][i].language1, "hin");

    datakey6.forEach(element => {
    if(element=="hindi"){
     if(document.getElementsByName('skill1')[0].value == result["lang"][i].skill1){
      document.getElementsByName('skill1')[0].checked=true
     } 
      document.getElementById(element).checked = true;

    }
      
    });

    if (result["lang"][i].language1 == "hindi") {

      document.getElementById(result["lang"][i].language1).checked = true;

    }
    if (result["lang"][i].language1 == "English") {

      document.getElementById(result["lang"][i].language1).checked = true;
    }
    if (result["lang"][i].language1 == "Gujrati") {

      document.getElementById(result["lang"][i].language1).checked = true;
    }

    // datakey6.forEach(element => {
    //   console.log(element,"element");
    //   if(element=="hindi"){
    //     document.getElementById(element).checked=true;
    //     // console.log(result["lang"][i][element],"ans");

    //   }
    //   if(element=="English"){
    //     console.log(result["lang"][i][element],"ans");
    //     document.getElementById(element).checked=true;
    //   }

    // });
  });


}

