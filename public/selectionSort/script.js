
//selection sort
function sort() {
  let arr = document.getElementById('t1').value;
  let arr1 = arr.split(',');
  let myarr = new Array();
  for (let i = 0; i < arr1.length; i++) {
    myarr.push(parseInt(arr1[i]));
  }
  console.log(myarr);
  function swap(arr1, mini_idx, i) {
    var temp = arr1[mini_idx];
    arr1[mini_idx] = arr1[i];
    arr1[i] = temp;
  }

  function selectionSort() {
    var i, j, mini_idx;
    for (var i = 0; i < arr1.length - 1; i++) {
      mini_idx = i;
      for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[j] < arr1[mini_idx])
          mini_idx = j;
      }
      if (mini_idx != i) {
        swap(arr1, mini_idx, i);
      }
    }
  }
  selectionSort();
  document.getElementById('p1').innerHTML = "Sorted Array:" + arr1;
}


