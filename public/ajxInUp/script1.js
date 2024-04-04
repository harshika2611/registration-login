function basicDetailValidation() {
  var flag = true;
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const number = document.getElementById('number').value;
  const date = document.getElementById('dob').value;
  const code = document.getElementById('code').value;
  const add1 = document.getElementById('add1').value;
  const add2 = document.getElementById('add2').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const email = document.getElementById('email').value;
  const designation = document.getElementById('designation').value;
  const gender = document.getElementsByName('gd');
  const list = document.getElementById('status');
  const regfname = /^[a-zA-Z\s-]+$/;
  const regEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  const regnumber = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  const regDate = /[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/;
  const regzip = /^[0-9]{5}(?:-[0-9]{4})?$/;
  errorMsg = "Enter valid input";
  if (firstName == "" || !firstName.match(regfname)) {
    document.getElementById('error_fname').innerHTML = errorMsg;
    document.getElementById('error_fname').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_fname').style.display = "none"
  }
  if (number == "" || !number.match(regnumber)) {
    document.getElementById('error_number').innerHTML = errorMsg;
    document.getElementById('error_number').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_number').style.display = "none"
  }
  if (lastName == "" || !lastName.match(regfname)) {
    document.getElementById('error_lname').innerHTML = errorMsg;
    document.getElementById('error_lname').style.color = 'red';
    flag = false;
  }
  else {
    document.getElementById('error_lname').style.display = "none"
  }
  if (date == "" || !date.match(regDate)) {
    document.getElementById('error_dob').innerHTML = errorMsg;
    document.getElementById('error_dob').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_dob').style.display = "none"
  }
  if (code == "" || !code.match(regzip)) {
    document.getElementById('error_code').innerHTML = errorMsg;
    document.getElementById('error_code').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_code').style.display = "none"
  }
  if (add1 == "") {
    document.getElementById('error_add1').innerHTML = errorMsg;
    document.getElementById('error_add1').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_add1').style.display = "none"
  }
  if (add2 == "") {
    document.getElementById('error_add2').innerHTML = errorMsg;
    document.getElementById('error_add2').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_add2').style.display = "none"
  }
  if (city == "") {
    document.getElementById('error_city').innerHTML = errorMsg;
    document.getElementById('error_city').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_city').style.display = "none"
  }
  if (state == "") {
    document.getElementById('error_state').innerHTML = errorMsg;
    document.getElementById('error_state').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_state').style.display = "none"
  }
  if (designation == "") {
    document.getElementById('error_designation').innerHTML = errorMsg;
    document.getElementById('error_designation').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_designation').style.display = "none"
  }
  let genValue = false;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked == true) {
      genValue = true;

    }
  }
  if (!genValue) {
    errorMsg = "Choose valid option";
    document.getElementById('error_gender').innerHTML = errorMsg;
    document.getElementById('error_gender').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_gender').style.display = "none"
  }
  if (email == "" || !email.match(regEmail)) {
    document.getElementById('error_email').innerHTML = errorMsg;
    document.getElementById('error_email').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_email').style.display = "none"
  }
  if (list.value == "") {
    errorMsg = "Choose valid value";
    document.getElementById('error_status').innerHTML = errorMsg;
    document.getElementById('error_status').style.color = 'red';
    flag = false;
  } else {
    document.getElementById('error_status').style.display = "none"
  }

  return flag;
}

function eduValidation() {
  var flag = true;
  errorMsg = "Enter valid input";
  const ssc = document.getElementById('board').value;
  const sscPer = document.getElementById('sscper').value;
  const sscP = document.getElementById('ssc_py').value;
  const hsc = document.getElementById('board_hsc').value;
  const hscper = document.getElementById('hscper').value;
  const hp = document.getElementById('hsc_y').value;
  const be = document.getElementById('degree').value;
  const bePer = document.getElementById('beper').value;
  const beY = document.getElementById('py').value;
  const mt = document.getElementById('md').value;
  const mtper = document.getElementById('masterper').value;
  const mtY = document.getElementById('master_py').value;
  if (ssc != "") {
    if (sscPer == "") {

      document.getElementById('error_sper').innerHTML = errorMsg;
      document.getElementById('error_sper').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_sper').style.display = "none"
    }
    if (sscP == "") {
      document.getElementById('error_sp').innerHTML = errorMsg;
      document.getElementById('error_sp').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_sp').style.display = "none"
    }
  }
  if (sscP != "") {
    if (ssc == "") {

      document.getElementById('error_ssc').innerHTML = errorMsg;
      document.getElementById('error_ssc').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_ssc').style.display = "none"
    }
    if (sscPer == "") {
      document.getElementById('error_sper').innerHTML = errorMsg;
      document.getElementById('error_sper').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_sper').style.display = "none"
    }
  }
  if (sscPer != "") {
    if (ssc == "") {

      document.getElementById('error_ssc').innerHTML = errorMsg;
      document.getElementById('error_ssc').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_ssc').style.display = "none"
    }
    if (sscP == "") {
      document.getElementById('error_sp').innerHTML = errorMsg;
      document.getElementById('error_sp').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_sp').style.display = "none"
    }
  }
  if (hsc != "") {
    if (hp == "") {

      document.getElementById('error_hp').innerHTML = errorMsg;
      document.getElementById('error_hp').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_hp').style.display = "none"
    }
    if (hscper == "") {
      document.getElementById('error_hper').innerHTML = errorMsg;
      document.getElementById('error_hper').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_hper').style.display = "none"
    }
  }
  if (hscper != "") {
    if (hsc == "") {
      document.getElementById('error_hsc').innerHTML = errorMsg;
      document.getElementById('error_hsc').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_hsc').style.display = "none"
    }
    if (hp == "") {
      document.getElementById('error_hp').innerHTML = errorMsg;
      document.getElementById('error_hp').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_hp').style.display = "none"
    }
  }
  if (hp != "") {
    if (hsc == "") {
      document.getElementById('error_hsc').innerHTML = errorMsg;
      document.getElementById('error_hsc').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_hsc').style.display = "none"
    }
    if (hscper == "") {
      document.getElementById('error_hper').innerHTML = errorMsg;
      document.getElementById('error_hper').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_hper').style.display = "none"
    }
  }

  if (be != "") {
    if (bePer == "") {


      document.getElementById('error_beper').innerHTML = errorMsg;
      document.getElementById('error_beper').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_beper').style.display = "none"
    }
    if (beY == "") {
      document.getElementById('error_py').innerHTML = errorMsg;
      document.getElementById('error_py').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_py').style.display = "none"
    }
  }
  if (bePer != "") {
    if (be == "") {


      document.getElementById('error_cn').innerHTML = errorMsg;
      document.getElementById('error_cn').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_cn').style.display = "none"
    }
    if (beY == "") {
      document.getElementById('error_py').innerHTML = errorMsg;
      document.getElementById('error_py').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_py').style.display = "none"
    }
  }
  if (beY != "") {
    if (be == "") {

      document.getElementById('error_cn').innerHTML = errorMsg;
      document.getElementById('error_cn').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_cn').style.display = "none"
    }
    if (bePer == "") {
      document.getElementById('error_beper').innerHTML = errorMsg;
      document.getElementById('error_beper').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_beper').style.display = "none"
    }
  }
  if (mt != "") {
    if (mtper == "") {

      document.getElementById('error_masterper').innerHTML = errorMsg;
      document.getElementById('error_masterper').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_masterper').style.display = "none"
    }
    if (mtY == "") {
      document.getElementById('error_mp').innerHTML = errorMsg;
      document.getElementById('error_mp').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_mp').style.display = "none"
    }
  }
  if (mtper != "") {
    if (mt == "") {
      document.getElementById('error_md').innerHTML = errorMsg;
      document.getElementById('error_md').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_md').style.display = "none"
    }
    if (mtY == "") {
      document.getElementById('error_mp').innerHTML = errorMsg;
      document.getElementById('error_mp').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_mp').style.display = "none"
    }
  }
  if (mtY != "") {
    if (mt == "") {
      document.getElementById('error_md').innerHTML = errorMsg;
      document.getElementById('error_md').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_md').style.display = "none"
    }
    if (mtper == "") {
      document.getElementById('error_masterper').innerHTML = errorMsg;
      document.getElementById('error_masterper').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_masterper').style.display = "none"
    }
  }
  return flag;

}

function workValidation() {
  var flag = true;
  errorMsg = "Enter valid input";
  const name1 = document.getElementById('name1').value;
  const design1 = document.getElementById('design1').value;
  const from1 = document.getElementById('from1').value;
  const to1 = document.getElementById('to1').value;
  const name2 = document.getElementById('name2').value;
  const design2 = document.getElementById('design2').value;
  const from2 = document.getElementById('from2').value;
  const to2 = document.getElementById('to2').value;
  const name3 = document.getElementById('name3').value;
  const design3 = document.getElementById('design3').value;
  const from3 = document.getElementById('from3').value;
  const to3 = document.getElementById('to3').value;
  if (name1 != "") {
    if (design1 == "") {
      document.getElementById('error_design1').innerHTML = errorMsg;
      document.getElementById('error_design1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_design1').style.display = "none"
    }
    if (from1 == "") {
      document.getElementById('error_from1').innerHTML = errorMsg;
      document.getElementById('error_from1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_from1').style.display = "none"
    }
    if (to1 == "") {
      document.getElementById('error_to1').innerHTML = errorMsg;
      document.getElementById('error_to1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_to1').style.display = "none"
    }
  }
  if (design1 != "") {
    if (name1 == "") {
      document.getElementById('error_name1').innerHTML = errorMsg;
      document.getElementById('error_name1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_name1').style.display = "none"
    }
    if (from1 == "") {
      document.getElementById('error_from1').innerHTML = errorMsg;
      document.getElementById('error_from1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_from1').style.display = "none"
    }
    if (to1 == "") {
      document.getElementById('error_to1').innerHTML = errorMsg;
      document.getElementById('error_to1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_to1').style.display = "none"
    }
  }
  if (from1 != "") {
    if (name1 == "") {
      document.getElementById('error_name1').innerHTML = errorMsg;
      document.getElementById('error_name1').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_name1').style.display = "none"
    }
    if (design1 == "") {
      document.getElementById('error_design1').innerHTML = errorMsg;
      document.getElementById('error_design1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_design1').style.display = "none"
    }
    if (to1 == "") {
      document.getElementById('error_to1').innerHTML = errorMsg;
      document.getElementById('error_to1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_to1').style.display = "none"
    }
  }

  if (to1 != "") {
    if (name1 == "") {

      document.getElementById('error_name1').innerHTML = errorMsg;
      document.getElementById('error_name1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_name1').style.display = "none"
    }
    if (design1 == "") {
      document.getElementById('error_design1').innerHTML = errorMsg;
      document.getElementById('error_design1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_design1').style.display = "none"
    }
    if (from1 == "") {
      document.getElementById('error_from1').innerHTML = errorMsg;
      document.getElementById('error_from1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_from1').style.display = "none"
    }
  }

  if (name2 != "") {
    if (design2 == "") {
      document.getElementById('error_design2').innerHTML = errorMsg;
      document.getElementById('error_design2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_design2').style.display = "none"
      flag = true;
    }
    if (from2 == "") {
      document.getElementById('error_from2').innerHTML = errorMsg;
      document.getElementById('error_from2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_from2').style.display = "none"
      flag = true;
    }
    if (to2 == "") {
      document.getElementById('error_to2').innerHTML = errorMsg;
      document.getElementById('error_to2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_to2').style.display = "none"
      flag = true;
    }

  }
  if (design2 != "") {
    if (name2 == "") {
      document.getElementById('error_name2').innerHTML = errorMsg;
      document.getElementById('error_name2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_name2').style.display = "none"
      flag = true;
    }
    if (from2 == "") {
      document.getElementById('error_from2').innerHTML = errorMsg;
      document.getElementById('error_from2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_from2').style.display = "none"
      flag = true;
    }
    if (to2 == "") {
      document.getElementById('error_to2').innerHTML = errorMsg;
      document.getElementById('error_to2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_to2').style.display = "none"
      flag = true;
    }

  }
  if (from2 != "") {
    if (name2 == "") {
      document.getElementById('error_name2').innerHTML = errorMsg;
      document.getElementById('error_name2').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_name2').style.display = "none"
      flag = true;
    }
    if (design2 == "") {
      document.getElementById('error_design2').innerHTML = errorMsg;
      document.getElementById('error_design2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_design2').style.display = "none"
      flag = true;
    }
    if (to2 == "") {
      document.getElementById('error_to2').innerHTML = errorMsg;
      document.getElementById('error_to2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_to2').style.display = "none"
      flag = true;
    }

  }
  if (to2 != "") {
    if (name2 == "") {

      document.getElementById('error_name2').innerHTML = errorMsg;
      document.getElementById('error_name2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_name2').style.display = "none"
      flag = true;
    }
    if (design2 == "") {
      document.getElementById('error_design2').innerHTML = errorMsg;
      document.getElementById('error_design2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_design2').style.display = "none"
      flag = true;
    }
    if (from2 == "") {
      document.getElementById('error_from2').innerHTML = errorMsg;
      document.getElementById('error_from2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_from2').style.display = "none"
      flag = true;
    }

  }

  if (name3 != "") {
    if (design3 == "") {
      document.getElementById('error_design3').innerHTML = errorMsg;
      document.getElementById('error_design3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_design3').style.display = "none"
      flag = true;
    }
    if (from3 == "") {
      document.getElementById('error_from3').innerHTML = errorMsg;
      document.getElementById('error_from3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_from3').style.display = "none"
      flag = true;
    }
    if (to3 == "") {
      document.getElementById('error_to3').innerHTML = errorMsg;
      document.getElementById('error_to3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_to3').style.display = "none"
      flag = true;
    }
  }
  if (design3 != "") {
    if (name3 == "") {
      document.getElementById('error_name3').innerHTML = errorMsg;
      document.getElementById('error_name3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_name3').style.display = "none"
      flag = true;
    }
    if (from3 == "") {
      document.getElementById('error_from3').innerHTML = errorMsg;
      document.getElementById('error_from3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_from3').style.display = "none"
      flag = true;
    }
    if (to3 == "") {
      document.getElementById('error_to3').innerHTML = errorMsg;
      document.getElementById('error_to3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_to3').style.display = "none"
      flag = true;
    }

  }
  if (from3 != "") {
    if (name3 == "") {
      document.getElementById('error_name3').innerHTML = errorMsg;
      document.getElementById('error_name3').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_name3').style.display = "none"
      flag = true;
    }
    if (design3 == "") {
      document.getElementById('error_design3').innerHTML = errorMsg;
      document.getElementById('error_design3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_design3').style.display = "none"
      flag = true;
    }
    if (to3 == "") {
      document.getElementById('error_to3').innerHTML = errorMsg;
      document.getElementById('error_to3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_to3').style.display = "none"
      flag = true;
    }
  }
  if (to3 != "") {
    if (name3 == "") {

      document.getElementById('error_name3').innerHTML = errorMsg;
      document.getElementById('error_name3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_name3').style.display = "none"
      flag = true;
    }
    if (design3 == "") {
      document.getElementById('error_design3').innerHTML = errorMsg;
      document.getElementById('error_design3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_design3').style.display = "none"
      flag = true;
    }
    if (from3 == "") {
      document.getElementById('error_from3').innerHTML = errorMsg;
      document.getElementById('error_from3').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_from3').style.display = "none"
      flag = true;
    }
  }
  return flag;
}

function langValidation() {
  var flag = true;
  const skill1 = document.getElementsByName('skill1');
  const language1 = document.getElementById('language1');
  const skill2 = document.getElementsByName('skill2');
  const language2 = document.getElementById('language2');
  const skill3 = document.getElementsByName('skill3');
  const language3 = document.getElementById('language3');
  if (language1.checked) {

    let arr = [];
    skill1.forEach(element => {
      if (element.checked && language1.checked) {
        arr.push(element);
      }
      if (arr == "") {
        document.getElementById('error_hindi').innerHTML = "check at least one checkbox";
        document.getElementById('error_hindi').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_hindi').style.display = "none"
        flag = true;
      }
    });
  }
  skill1.forEach(element => {
    if (element.checked) {
      if (!language1.checked) {
        document.getElementById('error_hindi').innerHTML = "check language";
        document.getElementById('error_hindi').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_hindi').style.display = "none"
        flag = true;
      }
    }
  })




  if (language2.checked) {

    let arr = [];
    skill2.forEach(element => {
      if (element.checked && language2.checked) {
        arr.push(element);
      }
      if (arr == "") {
        document.getElementById('error_english').innerHTML = "check at least one checkbox";
        document.getElementById('error_english').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_english').style.display = "none"
        flag = true;
      }
    });
  }
  skill2.forEach(element => {
    if (element.checked) {
      if (!language2.checked) {
        document.getElementById('error_english').innerHTML = "check language";
        document.getElementById('error_english').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_english').style.display = "none"
        flag = true;
      }
    }
  })
  if (language3.checked) {
    console.log(skill3);
    let arr = [];
    skill3.forEach(element => {
      if (element.checked && language3.checked) {
        arr.push(element);
      }
      if (arr == "") {
        document.getElementById('error_gujrati').innerHTML = "check language";
        document.getElementById('error_gujrati').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_gujrati').style.display = "none"
        flag = true;
      }
    });
  }
  skill3.forEach(element => {
    if (element.checked) {
      if (!language3.checked) {
        document.getElementById('error_gujrati').innerHTML = "check language";
        document.getElementById('error_gujrati').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_gujrati').style.display = "none"
        flag = true;
      }
    }
  })
  return flag;
}

function techValidation() {
  var flag = true;
  const technology1 = document.getElementById('technologi1');
  const tech_skill1 = document.getElementsByName('tech_skill1');
  const technology2 = document.getElementById('technologi2');
  const tech_skill2 = document.getElementsByName('tech_skill2');
  const technology3 = document.getElementById('technologi3');
  const tech_skill3 = document.getElementsByName('tech_skill3');
  const technology4 = document.getElementById('technologi4');
  const tech_skill4 = document.getElementsByName('tech_skill4');
  if (technology1.checked) {
    tech_skill1.forEach(element => {
      if (!element.checked) {
        document.getElementById('error_php').innerHTML = "check one skill";
        document.getElementById('error_php').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_php').style.display = "none"
        flag = true;
      }
    });
  }
  tech_skill1.forEach(element => {
    if (element.checked) {
      if (!technology1.checked) {
        document.getElementById('error_php').innerHTML = "check technology";
        document.getElementById('error_php').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_php').style.display = "none"
        flag = true;
      }
    }
  });



  if (technology2.checked) {
    tech_skill2.forEach(element => {
      if (!element.checked) {
        document.getElementById('error_Mysql').innerHTML = "check one skill";
        document.getElementById('error_Mysql').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_Mysql').style.display = "none"
        flag = true;
      }
    });
  }
  tech_skill2.forEach(element => {
    if (element.checked) {
      if (!technology2.checked) {
        document.getElementById('error_Mysql').innerHTML = "check technology";
        document.getElementById('error_Mysql').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_Mysql').style.display = "none"
        flag = true;
      }
    }
  });



  if (technology3.checked) {
    tech_skill3.forEach(element => {
      if (!element.checked) {
        document.getElementById('error_larave').innerHTML = "check one skill";
        document.getElementById('error_larave').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_larave').style.display = "none"
        flag = true;
      }
    });
  }
  tech_skill3.forEach(element => {
    if (element.checked) {
      if (!technology3.checked) {
        document.getElementById('error_larave').innerHTML = "check technology";
        document.getElementById('error_larave').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_larave').style.display = "none"
        flag = true;
      }
    }
  });


  if (technology4.checked) {
    tech_skill4.forEach(element => {
      if (!element.checked) {
        document.getElementById('error_oracle').innerHTML = "check one skill";
        document.getElementById('error_oracle').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_oracle').style.display = "none"
        flag = true;
      }
    });
  }
  tech_skill4.forEach(element => {
    if (element.checked) {
      if (!technology4.checked) {
        document.getElementById('error_oracle').innerHTML = "check technology";
        document.getElementById('error_oracle').style.color = 'red';
        flag = false;
      } else {
        document.getElementById('error_oracle').style.display = "none"
        flag = true;
      }
    }
  });

  return flag;

}

function refValidation() {
  var flag = true;
  errorMsg = "Enter valid input";

  const refname1 = document.getElementById('refname1').value;
  const num1 = document.getElementById('num1').value;
  const relation1 = document.getElementById('relation1').value;
  const refname2 = document.getElementById('refname2').value;
  const num2 = document.getElementById('num2').value;
  const relation2 = document.getElementById('relation2').value;

  if (refname1 != "") {
    if (num1 == "") {
      errorMsg = "Enter valid input";
      document.getElementById('error_num1').innerHTML = errorMsg;
      document.getElementById('error_num1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_num1').style.display = "none"
      flag = true;
    }
    if (relation1 == "") {
      document.getElementById('error_relation1').innerHTML = errorMsg;
      document.getElementById('error_relation1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_relation1').style.display = "none"
      flag = true;
    }
  }
  if (num1 != "") {
    if (refname1 == "") {
      errorMsg = "Enter valid input";
      document.getElementById('error_refname1').innerHTML = errorMsg;
      document.getElementById('error_refname1').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_refname1').style.display = "none"
      flag = true;
    }
    if (relation1 == "") {
      document.getElementById('error_relation1').innerHTML = errorMsg;
      document.getElementById('error_relation1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_relation1').style.display = "none"
      flag = true;
    }
  }
  if (relation1 != "") {
    if (num1 == "") {
      errorMsg = "Enter valid input";
      document.getElementById('error_num1').innerHTML = errorMsg;
      document.getElementById('error_num1').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_num1').style.display = "none"
      flag = true;
    }
    if (refname1 == "") {
      document.getElementById('error_refname1').innerHTML = errorMsg;
      document.getElementById('error_refname1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_refname1').style.display = "none"
      flag = true;
    }
  }

  if (refname2 != "") {
    if (num2 == "") {
      errorMsg = "Enter valid input";
      document.getElementById('error_num2').innerHTML = errorMsg;
      document.getElementById('error_num2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_num2').style.display = "none"
      flag = true;
    }
    if (relation2 == "") {
      document.getElementById('error_relation2').innerHTML = errorMsg;
      document.getElementById('error_relation2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_relation2').style.display = "none"
      flag = true;
    }
  }
  if (num2 != "") {
    if (refname2 == "") {
      errorMsg = "Enter valid input";
      document.getElementById('error_refname2').innerHTML = errorMsg;
      document.getElementById('error_refname2').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_refname2').style.display = "none"
      flag = true;
    }
    if (relation2 == "") {
      document.getElementById('error_relation2').innerHTML = errorMsg;
      document.getElementById('error_relation2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_relation2').style.display = "none"
      flag = true;
    }
  }
  if (relation2 != "") {
    if (num2 == "") {
      errorMsg = "Enter valid input";
      document.getElementById('error_num2').innerHTML = errorMsg;
      document.getElementById('error_num2').style.color = 'red';

      flag = false;
    } else {
      document.getElementById('error_num2').style.display = "none"
      flag = true;
    }
    if (refname2 == "") {
      document.getElementById('error_refname2').innerHTML = errorMsg;
      document.getElementById('error_refname2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_refname2').style.display = "none"
      flag = true;
    }
  }
  return flag;
}


function prefValidation() {
  var flag = true;
  errorMsg = "Enter valid input";
  const location = document.getElementById('location').value;
  const nt = document.getElementById('nt').value;
  const ctc1 = document.getElementById('Ctc1').value;
  const ctc2 = document.getElementById('Ctc2').value;
  const list2 = document.getElementById('department').value;

  if (location != "") {
    if (nt == "") {

      document.getElementById('error_nt').innerHTML = errorMsg;
      document.getElementById('error_nt').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_nt').style.display = "none"
      flag = true;
    }
    if (ctc1 == "") {
      document.getElementById('error_Ctc1').innerHTML = errorMsg;
      document.getElementById('error_Ctc1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_Ctc1').style.display = "none"
      flag = true;
    }
    if (ctc2 == "") {
      document.getElementById('error_Ctc2').innerHTML = errorMsg;
      document.getElementById('error_Ctc2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_Ctc2').style.display = "none"
      flag = true;
    }
    if (list2 == "") {
      errorMsg1 = "Choose valid value";
      document.getElementById('error_status2').innerHTML = errorMsg1;
      document.getElementById('error_status2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_status2').style.display = "none"
      flag = true;
    }
  }
  if (nt != "") {
    if (location == "") {
      document.getElementById('error_location').innerHTML = errorMsg;
      document.getElementById('error_location').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_location').style.display = "none"
      flag = true;
    }
    if (ctc1 == "") {
      document.getElementById('error_Ctc1').innerHTML = errorMsg;
      document.getElementById('error_Ctc1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_Ctc1').style.display = "none"
      flag = true;
    }
    if (ctc2 == "") {
      document.getElementById('error_Ctc2').innerHTML = errorMsg;
      document.getElementById('error_Ctc2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_Ctc2').style.display = "none"
      flag = true;
    }
    if (list2 == "") {
      errorMsg1 = "Choose valid value";
      document.getElementById('error_status2').innerHTML = errorMsg1;
      document.getElementById('error_status2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_status2').style.display = "none"
      flag = true;
    }
  }
  if (ctc1 != "") {
    if (location == "") {
      document.getElementById('error_location').innerHTML = errorMsg;
      document.getElementById('error_location').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_location').style.display = "none"
      flag = true;
    }
    if (ctc2 == "") {
      document.getElementById('error_Ctc2').innerHTML = errorMsg;
      document.getElementById('error_Ctc2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_Ctc2').style.display = "none"
      flag = true;
    }
    if (list2 == "") {
      errorMsg1 = "Choose valid value";
      document.getElementById('error_status2').innerHTML = errorMsg1;
      document.getElementById('error_status2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_status2').style.display = "none"
      flag = true;
    }
    if (nt == "") {
      document.getElementById('error_nt').innerHTML = errorMsg;
      document.getElementById('error_nt').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_nt').style.display = "none"
      flag = true;
    }
  }
  if (ctc2 != "") {
    if (location == "") {
      document.getElementById('error_location').innerHTML = errorMsg;
      document.getElementById('error_location').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_location').style.display = "none"
      flag = true;
    }
    if (list2 == "") {
      errorMsg1 = "Choose valid value";
      document.getElementById('error_status2').innerHTML = errorMsg1;
      document.getElementById('error_status2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_status2').style.display = "none"
      flag = true;
    }
    if (ctc1 == "") {
      document.getElementById('error_Ctc1').innerHTML = errorMsg;
      document.getElementById('error_Ctc1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_Ctc1').style.display = "none"
      flag = true;
    }
    if (nt == "") {
      document.getElementById('error_nt').innerHTML = errorMsg;
      document.getElementById('error_nt').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_nt').style.display = "none"
      flag = true;
    }
  }
  if (list2 != "") {
    if (location == "") {
      document.getElementById('error_location').innerHTML = errorMsg;
      document.getElementById('error_location').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_location').style.display = "none"
      flag = true;
    }
    if (ctc1 == "") {
      document.getElementById('error_Ctc1').innerHTML = errorMsg;
      document.getElementById('error_Ctc1').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_Ctc1').style.display = "none"
      flag = true;
    }
    if (ctc2 == "") {
      document.getElementById('error_Ctc2').innerHTML = errorMsg;
      document.getElementById('error_Ctc2').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_Ctc2').style.display = "none"
      flag = true;
    }
    if (nt == "") {
      document.getElementById('error_nt').innerHTML = errorMsg;
      document.getElementById('error_nt').style.color = 'red';
      flag = false;
    } else {
      document.getElementById('error_nt').style.display = "none"
      flag = true;
    }
  }
  return flag;
}