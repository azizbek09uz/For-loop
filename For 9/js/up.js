`use strict`

let a = +prompt('A ni kiriting', ''), b = +prompt('B ni kiriting', '');

if (a > b){
    alert('a dan b katta bulishi kerak');
}

let c = 0;

for (let i = a; i <= b; i++) {
  c = i * i + c;
}

alert(`a dan b gacha sonlar kvadratlari yigindisi:  ${c}`);