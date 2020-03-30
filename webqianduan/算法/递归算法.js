var arr = new Array(5);
var num = randomNumber();
var i = 0;
randomArr(arr, num);
function randomArr(arr, num) {
  if (arr.indexOf(num) < 0) {
    arr[i] = num;
    i++;
  } else {
    num = randomNumber();
  }
  if (i >= arr.length) {
    console.log(arr);
    return;
  } else {
    randomArr(arr, num)
  }
}
function randomNumber() {
  return Math.floor(Math.random() * 31 + 2)
}