`use strict`


let n = prompt('N kiriting');
let k = 0;

for (var i = 1; i <= n; i++) {
  k += (2 * i) - 1;
  alert((2 * i) - 1);
}

alert("Kvadrat: " + k);