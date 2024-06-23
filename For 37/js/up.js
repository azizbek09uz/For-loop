`use strict`

let n = +prompt('N ni kiriting', ''), y = 0;


for (var i = 1; i <= n; i++) {
  y += Math.pow(i, i);
}


alert(y)