`use strict`

let price = +prompt('Narxni kiriting', ''), count = 1, nimadur = price;

for (let i = 1; i < 11; i++) {

    nimadur = price * count / 10
    count++;
    
    alert(nimadur + 'sum')
}