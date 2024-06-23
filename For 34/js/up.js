`use strict`



let n = 5;
let hadlar = [1, 2];



for (var k = 3; k <= n + 2; k++) {
  var had = (hadlar[k - 3] + Math.pow(2, k - 1) * hadlar[k - 2]) / 3;
  hadlar.push(had);
}

alert("Dastlabki " + n + " ta hadlar: " + hadlar.slice(0, n));