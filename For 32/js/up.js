`use strict`


let n = 5;
let hadlar = [1];



for (var k = 1; k <= n; k++) {
  var had = (hadlar[k - 1] + 1) / k;
  hadlar.push(had);
}

alert("Dastlabki " + n + " ta hadlar: " + hadlar.slice(0, n));