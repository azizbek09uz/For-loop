`use strict`

let n = +prompt('N ni kiriting', ''), a = 1;

for (let i = 1; i < n + 1; i++) {
    a = a * i
}

alert('N faktaryal =' + a)