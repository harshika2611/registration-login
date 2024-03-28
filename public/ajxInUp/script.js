const prev = document.getElementsByClassName(".btn-prev");
const next = document.getElementsByClassName(".btn-next");
const form = document.querySelectorAll(".form1");
let count = 0;

function nextFun() {
  if (count <= 6) {
    count++;

  }
  if (count == 6) {
    document.getElementById("next-btn").hidden = true;

  }
  updatesteps();
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
  const id = window.location.pathname.split("/")[4];

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
  console.log(updateData);
  const response = await fetch(`http://localhost:8050/api/user/update/${id}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: updateData,
  });

  console.log(updateData);
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
  const response = await fetch("http://localhost:8050/api/tasks/fetchInsertUpdate", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: data,
  });
  console.log(data);
  // window.location = `http://localhost:8050/thanks`
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
  const path = window.location.pathname.split("/")[4];
  console.log(path,"dddddddd");
  const response = await fetch(`http://localhost:8050/api/user/data/${path}`);
  const result = await response.json();
  console.log(result);

  const key1 = Object.keys(result["basicdata"][0]);
  console.log(key1, "ahahahahah");
  key1.forEach(element => {
    if (element == 'gd') {
      console.log(result["basicdata"][0].gd);
      document.getElementById(result["basicdata"][0].gd).checked = true;
    } else {
      document.getElementsByName(element)[0].value = result["basicdata"][0][element];
      console.log(document.getElementsByName(element)[0]);
    }

  });
  const key2 = Object.keys(result["edudata"]);
  console.log(key2);

  key2.forEach((i) => {
    const datakey2 = Object.keys(result["edudata"][i]);
    datakey2.forEach(element => {

      document.getElementsByName(element)[i].value = result["edudata"][i][element];
      console.log(document.getElementsByName(element)[i]);
    });
  });

  const key3 = Object.keys(result["work"]);
  console.log(key3, 'wwwwwwwwwwwww');
  key3.forEach((i) => {
    const datakey3 = Object.keys(result["work"][i]);
    datakey3.forEach(element => {

      document.getElementsByName(element)[i].value = result["work"][i][element];
      console.log(document.getElementsByName(element)[i]);
    });
  });
  const key4 = Object.keys(result["referance"]);
  console.log(key4);
  key4.forEach((i) => {
    const datakey4 = Object.keys(result["referance"][i]);
    datakey4.forEach(element => {
      document.getElementsByName(element)[i].value = result["referance"][i][element];
      console.log(document.getElementsByName(element)[i]);
    });
  });
  const key5 = Object.keys(result["preferance"][0]);
  console.log(key5);
  key5.forEach(element => {

    document.getElementsByName(element)[0].value = result["preferance"][0][element];
    console.log(document.getElementsByName(element)[0]);


  });
  // const key6 = Object.keys(result["lang"]);
  // console.log(key6, "aaaaaaaaaaaaaaaaaaa");
  // key6.forEach((element) => {

  //   const datakey6 = Object.values(result["lang"][0]);
  //   console.log(element);
  //   // console.log(datakey6, "bbbbbb");
  //   console.log(result["lang"][element].language1, "abababab");
  //   const temp=  document.getElementsByName('language1');
  //  temp.forEach(item => {
  //   if(item.value==result["lang"][element].language1){
  //     item.checked = true;
  //   }
  //  });
   

  // });


}

