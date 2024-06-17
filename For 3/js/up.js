`use strict`


let a = prompt('A ni kiritng', ''), b = prompt('B ni kiriting', '');


for (let i = 1; i < a; i++) {
    if (a < b){
        b = b - 1
    }
    
    else{
        alert('Sonlar notugri kiritilgan')
    }
    alert(b)
}
