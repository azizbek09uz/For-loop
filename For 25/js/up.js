`use strict`



let n = +prompt('N ni kiriting', '');
let x = +prompt('X ni kiriting', '');
let y = 0;



for (var i = 1; i <= n; i++) {
    var eksponent = Math.pow(-1, i - 1) * Math.pow(x, i) / i;
    y += eksponent;
  }
  

alert("Yig'indi: " + y);