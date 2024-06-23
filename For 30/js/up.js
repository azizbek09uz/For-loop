`use strict`


let n = 10;
let A = 0;
let B = Math.PI;
let nuqtalar = [];
let step = (B - A) / n;



for (var i = 0; i <= n; i++) {
  var nuqta = A + i * step;
  var qiymat = 1 - Math.sin(nuqta);
  nuqtalar.push(qiymat);
}

alert("Ajratilgan qiymatlar: " + nuqtalar);