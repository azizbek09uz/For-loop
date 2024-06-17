`use strict`;

let a = prompt('A ni kiriting', ''),
  n = prompt('N ni kiriting', ''),
  b = 0,
  d = 1;

for (var i = 0; i <= n; i++) {
  b += d;
  d = -d * a;
  alert(b + `va` + d)
}

alert("Yig'indi: " + b);
