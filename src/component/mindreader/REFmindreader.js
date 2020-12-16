
var instruction = document.getElementById("instruction")
var header= document.getElementById("content")
var symbols = [ " ! "," @ "," # "," $ "," % "," ^ "," & "," * "," ~ "," + "]
var state = 1 

var selected = null

var symbols = [ " ! "," @ "," # "," $ "," % "," ^ "," & "," * "," ~ "," + "]

function init(){
    renderState()
}

function randomCard() {
    var answer = symbols[Math.floor(Math.random() * 10)]
    var str = "";
    for (i = 0; i <= 99; i++) {
        if (i % 9){
            var righterAnswer = symbols[Math.floor(Math.random() * 10)]
            console.log(i)
            str  = str  + i + "=" + righterAnswer + "<br>"
        }
        else {
            str =str + i + "=" + answer + "<br>"
            selected = answer
        }
     }
     str = str
     return str;
 }

 function forward(){
    
     state++;
     renderState()
}

function reverse(){
    state = 1 
    renderState()
}


console.log(state)

function renderState() {
    if (state == 1) {
        document.getElementById("content").innerHTML= "for a small fee, of course."
        document.getElementById("instruction").innerHTML= "Click Go to continue"
        document.getElementById("reset").style.visibility = "hidden"
        document.getElementById("go").style.visibility = "initial"
    } 
    else if (state == 2){
        document.getElementById("content").innerHTML= "Pick a number 01 -99 "
        document.getElementById("instruction").innerHTML= "Once you have your number click next "
        document.getElementById("reset").style.visibility = "initial"
        document.getElementById("go").style.visibility = "initial"
    }
    else if (state == 3){
        document.getElementById("content").innerHTML= "Add both digits together to get a new number "
        document.getElementById("instruction").innerHTML= "EX: 14 is 1 + 4 = 5  click next to continue "
        document.getElementById("reset").style.visibility = "initial"
        document.getElementById("go").style.visibility = "initial"
    }
    else if (state == 4){
        document.getElementById("content").innerHTML= "Subtract your new number from the original"
        document.getElementById("instruction").innerHTML= "EX: 14 - 5 =9 click next to continue "
        document.getElementById("reset").style.visibility = "initial"
        document.getElementById("go").style.visibility = "initial"
    }
    else if (state == 5){
        var newRandom= randomCard()
        document.getElementById("content").innerHTML= newRandom;
        document.getElementById("instruction").innerHTML= "Find your New Number.  Note the symbol beside the number "
        document.getElementById("reset").style.visibility = "initial"
        document.getElementById("go").style.visibility = "initial"
    }
    else if (state == 6){
        document.getElementById("content").innerHTML= " your symbol is : <br>" + selected 
        document.getElementById("instruction").innerHTML= "a bill will be mailed to you"
        document.getElementById("reset").style.visibility = "initial"
        document.getElementById("go").style.visibility = "initial"
    }
}
renderState()
