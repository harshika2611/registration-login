const prev = document.getElementsByClassName(".btn-prev");
const next = document.getElementsByClassName(".btn-next");
const form = document.querySelectorAll(".form1");
let count = 0;
function nextFun() {

  switch (count) {
    // case 0:
    //   if (!basicDetailValidation()) {
    //     return;
    //   }
    //   break;
    case 1:
      if (!eduValidation()) {
        return;
      }
      break;
    case 2:
      if (!workValidation()) {
        return;
      }
      break;
    case 3:
      if (!langValidation()) {
        return;
      }
      break;
    case 4:
      if (!techValidation()) {
        return;
      }
      break;
    case 5:
      if (!refValidation()) {
        return;
      }
      break;
    case 6:
      if (!prefValidation()) {
        return;
      }
      break;
    default:
      break;
  }


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

  const response = await fetch(`http://localhost:8050/api/tasks/fetchInsertUpdate/update/${id}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: updateData,
  });
  window.location.replace(`http://localhost:8050/api/tasks/thank`);
}


async function submitbtn() {
  switch (count) {
    // case 0:
    //   if (!basicDetailValidation()) {
    //     return;
    //   }
    //   break;
    case 1:
      if (!eduValidation()) {
        return;
      }
      break;
    case 2:
      if (!workValidation()) {
        return;
      }
      break;
    case 3:
      if (!langValidation()) {
        return;
      }
      break;
    case 4:
      if (!techValidation()) {
        return;
      }
      break;
    case 5:
      if (!refValidation()) {
        return;
      }
      break;
    case 6:
      if (!prefValidation()) {
        return;
      }
      break;
    default:
      break;
  }
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
  const response = await fetch(`http://localhost:8050/api/tasks/fetchInsertUpdate`, {
    method: "post",

    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: data,
  });
  window.location.replace(`http://localhost:8050/api/tasks/fetchInsertUpdate/list`);

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
  const response = await fetch(`http://localhost:8050/api/tasks/fetchInsertUpdate/data/${path}`);
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


  result["lang"].forEach(element => {
    if (element.language == "hindi") {
      document.getElementById("language1").checked = true;
      switch (element.skill) {
        case "read":
          document.getElementById("skillH1").checked = true
          break;
        case "write":
          document.getElementById("skillH2").checked = true
          break;
        case "speak":
          document.getElementById("skillH3").checked = true
          break;
        default:
          break;
      }
    } else if (element.language == "English") {
      document.getElementById("language2").checked = true
      switch (element.skill) {
        case "read":
          document.getElementById("skillE1").checked = true
          break;
        case "write":
          document.getElementById("skillE2").checked = true
          break;
        case "speak":
          document.getElementById("skillE3").checked = true
          break;
        default:
          break;
      }
    }
    else if (element.language == "Gujrati") {
      document.getElementById("language3").checked = true
      switch (element.skill) {
        case "read":
          document.getElementById("skillG1").checked = true
          break;
        case "write":
          document.getElementById("skillG2").checked = true
          break;
        case "speak":
          document.getElementById("skillG3").checked = true
          break;
        default:
          break;
      }
    }
  });



  Object.keys(result["tech"]).forEach((i) => {

    const key6 = result["tech"][i];
    if (result["tech"][i].technology_name == "PHP") {
      document.getElementById("technologi1").checked = true;
      if (result["tech"][i].technology_skill == "Beginer") {
        document.getElementById("Beginer1").checked = true;
      } else if (result["tech"][i].technology_skill == "Mideator") {
        document.getElementById("Mideator1").checked = true;
      } else if (result["tech"][i].technology_skill == "Expert") {
        document.getElementById("Expert1").checked = true;
      }
    }
    if (result["tech"][i].technology_name == "Mysql") {
      document.getElementById("technologi2").checked = true;
      if (result["tech"][i].technology_skill == "Beginer") {
        document.getElementById("Beginer2").checked = true;
      } else if (result["tech"][i].technology_skill == "Mideator") {
        document.getElementById("Mideator2").checked = true;
      } else if (result["tech"][i].technology_skill == "Expert") {
        document.getElementById("Expert2").checked = true;
      }
    }
    if (result["tech"][i].technology_name == "Larave") {
      document.getElementById("technologi3").checked = true;
      if (result["tech"][i].technology_skill == "Beginer") {
        document.getElementById("Beginer3").checked = true;
      } else if (result["tech"][i].technology_skill == "Mideator") {
        document.getElementById("Mideator3").checked = true;
      } else if (result["tech"][i].technology_skill == "Expert") {
        document.getElementById("Expert3").checked = true;
      }
    }
    if (result["tech"][i].technology_name == "Oracle") {
      document.getElementById("technologi4").checked = true;
      if (result["tech"][i].technology_skill == "Beginer") {
        document.getElementById("Beginer4").checked = true;
      } else if (result["tech"][i].technology_skill == "Mideator") {
        document.getElementById("Mideator4").checked = true;
      } else if (result["tech"][i].technology_skill == "Expert") {
        document.getElementById("Expert4").checked = true;
      }
    }

  })











  // key6.forEach((i) => {
  //   const datakey6=Object.keys(result["lang"][i]);
  //   console.log(datakey6,"data");

  //   datakey6.forEach(element => {
  //     console.log(element,"log");


  //     console.log(document.getElementById("language"+p),"final");
  //     // console.log(document.getElementById("skill",arr[k]+i),"valllll");
  //     // document.getElementById("language"+p).checked=true;
  //     // document.getElementById("skill",arr[k]+i).checked=true;
  //   });
  //   p++;
  //   k++;
  // });


}

