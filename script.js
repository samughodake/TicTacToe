//tic tac toe game in js
buttonArray = []
botArray = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9'];
winnerFlag = 0;
buttonFlag = 0
buttonCount = 0;
buttonId = "";
playerXCount = 0;
playerOCount = 0;

button1 = ""; button2 = ""; button3 = ""; button4 = ""; button5 = ""; button6 = ""; button7 = ""; button8 = ""; button9 = "";
function generateButton(buttonObject) {
    buttonId = buttonObject.id
    document.querySelector("#" + buttonId).textContent = "X";
    buttonArray.push(buttonId);
    //console.log("buttonArray: " + buttonArray);
    var cm = commonElements(buttonArray, botArray);
    var i = botArray.indexOf('' + cm);
    //console.log("index to be removed : " + i);
    botArray.splice(i, 1);
    //console.log("botArray : " + botArray);
    //console.log("common element : " + cm);

    botLogic();
    buttonCount++;
    document.getElementById('' + buttonId).disabled = true;
    decideWinner(buttonId);
    //console.log(buttonCount);
}

function commonElements(buttonArray, botArray) {
    var common = [];
    for (let i = 0; i < buttonArray.length; i++) {
        for (let j = 0; j < botArray.length; j++) {
            if (buttonArray[i] == botArray[j]) {
                common.push(buttonArray[i]);
            }
        }
    }
    return common
}

function playAgain() {
    buttonArray = [];
    botArray = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9'];
    var a = document.querySelectorAll("button");

    for (let i = 0; i < a.length - 1; i++) {
        a[i].textContent = "";
        a[i].disabled = false;
    }
    button1 = button2 = button3 = button4 = button5 = button6 = button7 = button8 = button9 = "";
    buttonFlag = 0;
    buttonCount = 0;
    winnerFlag = 0;

}

function botLogic() {
    if (botArray.length !== 0) {
        var a = botArray[Math.floor(Math.random() * botArray.length)];
        //console.log("random index" + a);
        document.querySelector("#" + a).textContent = "O";
        document.getElementById('' + a).disabled = true;
        var i = botArray.indexOf('' + a);
        botArray.splice(i, 1);
        buttonCount++;
        console.log()
        decideWinner(a);
    }
    else {
        decideWinner(a);
    }


}

function decideWinner(buttonId) {
    if (buttonId === "button1") {
        button1 = document.querySelector("#" + buttonId).textContent;
        console.log(button1);
    }
    if (buttonId === "button2") {
        button2 = document.querySelector("#" + buttonId).textContent;
        console.log(button2);
    }
    if (buttonId === "button3") {
        button3 = document.querySelector("#" + buttonId).textContent;
        console.log(button3);
    }
    if (buttonId === "button4") {
        button4 = document.querySelector("#" + buttonId).textContent;
        console.log(button4);
    }
    if (buttonId === "button5") {
        button5 = document.querySelector("#" + buttonId).textContent;
        console.log(button5);
    }
    if (buttonId === "button6") {
        button6 = document.querySelector("#" + buttonId).textContent;
        console.log(button6);
    }
    if (buttonId === "button7") {
        button7 = document.querySelector("#" + buttonId).textContent;
        console.log(button7);
    }
    if (buttonId === "button8") {
        button8 = document.querySelector("#" + buttonId).textContent;
        console.log(button8);
    }
    if (buttonId === "button9") {
        button9 = document.querySelector("#" + buttonId).textContent;
        console.log(button9);
    }
    //now lets check the winner
    //winning conditions for player X
    if (button1 === "X" && button2 === "X" && button3 === "X") {
        playerXCount++;
        document.querySelector('#playerX').textContent = "Player X:  " + playerXCount;
        alert("Congratulations!!PLayer X wins");
        winnerFlag = 1;
    }
    if (button4 === "X" && button5 === "X" && button6 === "X") {
        playerXCount++;
        document.querySelector('#playerX').textContent = "Player X:  " + playerXCount;
        alert("Congratulations!!PLayer X wins");
        winnerFlag = 1;
    }
    if (button7 === "X" && button8 === "X" && button9 === "X") {
        playerXCount++;
        document.querySelector('#playerX').textContent = "Player X:  " + playerXCount;
        alert("Congratulations!!PLayer X wins");
        winnerFlag = 1;
    }
    if (button1 === "X" && button4 === "X" && button7 === "X") {
        playerXCount++;
        document.querySelector('#playerX').textContent = "Player X:  " + playerXCount;
        alert("Congratulations!!PLayer X wins");
        winnerFlag = 1;
    }
    if (button2 === "X" && button5 === "X" && button8 === "X") {
        playerXCount++;
        document.querySelector('#playerX').textContent = "Player X:  " + playerXCount;
        alert("Congratulations!!PLayer X wins");
        winnerFlag = 1;
    }
    if (button3 === "X" && button6 === "X" && button9 === "X") {
        playerXCount++;
        document.querySelector('#playerX').textContent = "Player X:  " + playerXCount;
        alert("Congratulations!!PLayer X wins");
        winnerFlag = 1;
    }
    if (button1 === "X" && button5 === "X" && button9 === "X") {
        playerXCount++;
        document.querySelector('#playerX').textContent = "Player X:  " + playerXCount;
        alert("Congratulations!!PLayer X wins");
        winnerFlag = 1;
    }
    if (button3 === "X" && button5 === "X" && button7 === "X") {
        playerXCount++;
        document.querySelector('#playerX').textContent = "Player X:  " + playerXCount;
        alert("Congratulations!!PLayer X wins");
        winnerFlag = 1;
    }

    //player O winner conditions
    if (button1 === "O" && button2 === "O" && button3 === "O") {
        playerOCount++;
        document.querySelector('#playerO').textContent = "Player O:  " + playerOCount;
        alert("Congratulations!!PLayer O wins");
        winnerFlag = 1;
    }
    if (button4 === "O" && button5 === "O" && button6 === "O") {
        playerOCount++;
        document.querySelector('#playerO').textContent = "Player O:  " + playerOCount;
        alert("Congratulations!!PLayer O wins");
        winnerFlag = 1;
    }
    if (button7 === "O" && button8 === "O" && button9 === "O") {
        playerOCount++;
        document.querySelector('#playerO').textContent = "Player O:  " + playerOCount;
        alert("Congratulations!!PLayer O wins");
        winnerFlag = 1;
    }
    if (button1 === "O" && button4 === "O" && button7 === "O") {
        playerOCount++;
        document.querySelector('#playerO').textContent = "Player O:  " + playerOCount;
        alert("Congratulations!!PLayer O wins");
        winnerFlag = 1;
    }
    if (button2 === "O" && button5 === "O" && button8 === "O") {
        playerOCount++;
        document.querySelector('#playerO').textContent = "Player O:  " + playerOCount;
        alert("Congratulations!!PLayer O wins");
        winnerFlag = 1;
    }
    if (button3 === "O" && button6 === "O" && button9 === "O") {
        playerOCount++;
        document.querySelector('#playerO').textContent = "Player O:  " + playerOCount;
        alert("Congratulations!!PLayer O wins");
        winnerFlag = 1;
    }
    if (button1 === "O" && button5 === "O" && button9 === "O") {
        playerOCount++;
        document.querySelector('#playerO').textContent = "Player O:  " + playerOCount;
        alert("Congratulations!!PLayer X wins");
        winnerFlag = 1;
    }
    if (button3 === "O" && button5 === "O" && button7 === "O") {
        playerOCount++;
        document.querySelector('#playerO').textContent = "Player O:   " + playerOCount;
        alert("Congratulations!!PLayer O wins");
        winnerFlag = 1;
    }
    console.log("flag", winnerFlag);
    if (buttonCount === 9 && winnerFlag === 0) {
        //draw condition : this is a draw, no one wins
        alert("Oohhh, This is a draw. Play again. ")

    }

}
