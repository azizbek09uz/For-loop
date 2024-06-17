`use strict`;

let a = +prompt("a ni kiriting", ""),
  n = +prompt("N ni kiriting", ""),
  c = a;

for (let i = 1; i < n+1; i++) {
    a = c
    a = a**i
    alert(a)
}