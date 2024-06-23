`use strict`



let n = +prompt('N ni kiriting', '');
let x = +prompt('X ni kiriting', '');
let y = 0;
let faktorial;



for (var i = 0; i <= n; i++) {
  faktorial = 1;
  for (var j = 1; j <= i; j++) {
    faktorial *= j;
  }
  y += Math.pow(x, i) / faktorial;
}

alert("Yig'indi: " + y);