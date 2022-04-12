let first = document.getElementById("card1")
let second = document.getElementById("card2")
let third= document.getElementById("card3")
let fourth = document.getElementById("card4")

function generate(){
    const l = document.getElementById("length")
    first.textContent = Random(l.value)
    second.textContent = Random(l.value)
    third.textContent = Random(l.value)
    fourth.textContent = Random(l.value) 
}
function Random(length){
    let temp = ""
    for(let i=0; i<length; i++){
        temp += String.fromCharCode(Math.floor(64+ Math.random()*58))
    }

    return temp
}


function copy(x){

    if(x===1){
        var copyText = first.textContent;
    }else if(x===2){
        var copyText = second.textContent;
    }else if(x===3){
        var copyText = third.textContent;
    }else if(x===4){
        var copyText = fourth.textContent;
    }

    navigator.clipboard.writeText(copyText);

}
