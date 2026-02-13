var giftImage1 = document.querySelector(".gift-container1")
var giftImage2 = document.querySelector(".gift-container2")

var p1 = document.querySelector("#p1")
var p2 = document.querySelector("#p2")


function q1Correct(){
    console.log("correct")

    const correctPage = document.querySelector("#correct-answer-message");
    const buttonDesgin = document.querySelector("#b1-C")
    const present1Message = document.querySelector("#present1-message")


    present1Message.style="display:none"
    correctPage.style = "display: flex;";

}

function q1Wrong(){
    console.log("wrong")

    const wrongPage = document.querySelector("#wrong-answer");
    const buttonDesgin = document.querySelector("#b1-W")

    wrongPage.style = "display: flex;";
    buttonDesgin.style = "background-color: red;transition-duration:0.4s";


    setTimeout(() => {
    wrongPage.style = "display: none;"
    }, 1300);
}

function q2Correct(){
    console.log("correct")

    const correctPage = document.querySelector("#correct-answer-money");
    const buttonDesgin = document.querySelector("#b2-C")


    correctPage.style = "display: flex;";

}

function q2Wrong(){
    console.log("wrong")

    const wrongPage = document.querySelector("#wrong-answer");
    const buttonDesgin = document.querySelector("#b2-W")

    wrongPage.style = "display: flex;";
    buttonDesgin.style = "background-color: red;transition-duration:0.4s";


    setTimeout(() => {
    wrongPage.style = "display: none;"
    }, 1300);
}


function q2Wrong1(){
    console.log("wrong")

    const wrongPage = document.querySelector("#wrong-answer");
    const buttonDesgin = document.querySelector("#b2-W1")

    wrongPage.style = "display: flex;";
    buttonDesgin.style = "background-color: red;transition-duration:0.4s";


    setTimeout(() => {
    wrongPage.style = "display: none;"
    }, 1300);
}

function q2Wrong2(){
    console.log("wrong")

    const wrongPage = document.querySelector("#wrong-answer");
    const buttonDesgin = document.querySelector("#b2-W2")

    wrongPage.style = "display: flex;";
    buttonDesgin.style = "background-color: red;transition-duration:0.4s";


    setTimeout(() => {
    wrongPage.style = "display: none;"
    }, 1300);
}

function q2Wrong3(){
    console.log("wrong")

    const wrongPage = document.querySelector("#wrong-answer");
    const buttonDesgin = document.querySelector("#b2-W3")

    wrongPage.style = "display: flex;";
    buttonDesgin.style = "background-color: red;transition-duration:0.4s";

    setTimeout(() => {
    wrongPage.style = "display: none;"
    }, 1300);
}




function returnHomeMessage(){
    document.querySelector(".p-closed1").style="display:none"
    document.querySelector(".p-opening1").style="display:none"
    document.querySelector(".p-opened1").style="display:block"
    document.querySelector("#gift-message").style="display:none"

    p1.id = "iloveyouAylin";
}

function returnHomeMoney(){
    document.querySelector(".p-closed2").style="display:none"
    document.querySelector(".p-opening2").style="display:none"
    document.querySelector(".p-opened2").style="display:block"
    document.querySelector("#gift-money").style="display:none"

    p2.id = "iloveyousmAylin";

}


giftImage1.addEventListener("click", e =>{

    console.log("gift image 1 " + giftImage1.className)

    const giftMessage = document.querySelector("#gift-message")
    const correctAnswer = document.querySelector("#correct-answer-message")

    giftMessage.style = "display: flex;"
    correctAnswer.style="display:none"

})

giftImage2.addEventListener("click", e =>{

    console.log("gift image 2 " + giftImage2.className)

    const giftMessage = document.querySelector("#gift-money")
    const present2Message = document.querySelector("#present2-message")
    const correctAnswer = document.querySelector("#correct-answer-money")

    giftMessage.style = "display: flex;"
    present2Message.style="display:none"
    correctAnswer.style="display:none"

})

p1.addEventListener("click", e => {
    if(p1.id == "p1"){
        console.log("p1" + p1.id)
        document.querySelector("#present1-message").style="display:flex"
    }
    else{
        console.log("else" + p1.id)
        return;
    }
})

p2.addEventListener("click", e => {
      if(p2.id == "p2"){
        console.log("p2" + p2.id)
        document.querySelector("#present2-message").style="display:flex"
    }
    else{
        console.log("else" + p2.id)
        return;
    }
})




var heartButton = document.querySelector("#b1-C")

heartButton.addEventListener("mouseover", e =>{
    var aylin = Math.floor(Math.random() * 80);
    var brian = Math.floor(Math.random() * 80);

    heartButton.style=`top:${aylin}%;left:${brian}%`;
})



/*
document.querySelector(".content").addEventListener("mouseover", e => {
    if(p1.id == "iloveyouAylin" && p2.id == "iloveyousmAylin"){
        console.log("YUPDWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    }
    else{
        return
    }
})*/
