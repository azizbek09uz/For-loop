`use strict`


let a = prompt('A ni kiriting', '');
let n = prompt('N ni kiriting', '');
let b = 0;
let d;

for (var i = 0; i <= n; i++) {
  d = Math.pow(a, i);
  alert(d);
  b += d;
}

alert(b);