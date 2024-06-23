`use strict`



let n = 5;
let hadlar = [1, 2, 3];



for (var k = 4; k <= n + 3; k++) {
  var had = hadlar[k - 2] + hadlar[k - 3] - Math.pow(2, k - 4) * hadlar[k - 4];
  hadlar.push(had);
}

alert("Dastlabki " + n + " ta hadlar: " + hadlar.slice(0, n));