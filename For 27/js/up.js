`use strict`



let n = +prompt('N ni kiriting', '');
let x = +prompt('X ni kiriting', '');
let y = x;
let eksponent;
let faktorial;



for (var i = 1; i <= n; i++) {
    faktorial = 1;
    for (var j = 1; j <= 2 * i; j++) {
      faktorial *= j;
    }
    eksponent = (1 * 3 * (2 * i - 1) * Math.pow(x, 2 * i + 1)) / (faktorial * Math.pow(2, 2 * i) * (2 * i + 1));
    y += eksponent;
  }
  

alert("Yig'indi: " + y);