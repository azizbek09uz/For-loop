`use strict`


var n = 5;
var hadlar = [2];



for (var k = 1; k <= n; k++) {
  var had = 2 + 1 / hadlar[k - 1];
  hadlar.push(had);
}

alert("Dastlabki " + n + " ta hadlar: " + hadlar.slice(0, n));