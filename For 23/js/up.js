`use strict`



let n = +prompt('N ni kiriting', '');
let x = +prompt('X ni kiriting', '');
let y = 0;
let faktorial;



for (var i = 0; i <= n; i++) {
    faktorial = 1;
    for (var j = 1; j <= 2 * i + 1; j++) {
      faktorial *= j;
    }
    var eksponent = Math.pow(-1, i) * Math.pow(x, 2 * i + 1) / faktorial;
    y += eksponent;
  }

alert("Yig'indi: " + y);