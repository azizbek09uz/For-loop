`use strict`



let n = +prompt('N ni kiriting', '');
let x = +prompt('X ni kiriting', '');
let y = 0;
let eksponent;



for (var i = 1; i <= n; i++) {
    eksponent = Math.pow(-1, i) * Math.pow(x, 2 * i + 1) / (2 * i + 1);
    y += eksponent;
  }
  

alert("Yig'indi: " + y);