`use strict`




let n = 5;
let hadlar = [1, 1];



for (var k = 3; k <= n + 2; k++) {
  var had = hadlar[k - 3] + hadlar[k - 2];
  hadlar.push(had);
}

alert("Dastlabki " + n + " ta hadlar: " + hadlar.slice(0, n));