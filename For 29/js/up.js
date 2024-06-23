`use strict`



let n = 10;
let A = 2;
let B = 8;
let nuqtalar = [];
let step = (B - A) / n;


for (var i = 0; i <= n; i++) {
  var nuqta = A + i * step;
  nuqtalar.push(nuqta);
}

alert("Ajratilgan nuqtalar: " + nuqtalar);