`use strict`


let n = +prompt('N ni kiriting', ''), k = +prompt('K ni kiriting', ''), b = 0;

for (let i = 1; i <= n; i++) {
    b = i**k + b
}
alert(b)