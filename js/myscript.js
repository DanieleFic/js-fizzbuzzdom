let scatola = document.getElementById('container') 

for(let i = 0; i <= 100; i++){

    console.log (`interazione`, i)
    
    

    if((i%3 == 0) && (i%5 == 0) && (i != 0) ){
        scatola.innerHTML += `<div class= "box fizzbuzz">` + i + `</div>`
    }
    else if((i%3 == 0) && (i != 0)){ // multipo di 3 e stampiamo fizz
        scatola.innerHTML += `<div class= "box fizz">` + i + `</div>`

    }else if ((i%5 == 0) && (i != 0)){ // multipo di 5 e stampiamo buzz
        scatola.innerHTML += `<div class= "box buzz ">` + i + `</div>`

    }else  { // multipo di 3 e  5 e stampiamo buzz
        scatola.innerHTML += `<div class= "box  ">` + i + `</div>`
    
}
    
}
