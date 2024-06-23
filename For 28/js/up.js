`use strict`



let n = +prompt('N ni kiriting', '');
let x = +prompt('X ni kiriting', '');
let y = 1;
let eksponent;
let eksponent2;




for (var i = 1; i <= n; i++) {
    eksponent = 1;
    for (var j = 1; j <= 2 * i - 3; j++) {  
      eksponent *= j;
    }
    eksponent2 = Math.pow(-1, i) * eksponent * Math.pow(x, i) / (Math.pow(2, 2 * i) * (2 * i));
    y += eksponent2;
  }
  


alert("Yig'indi: " + y);