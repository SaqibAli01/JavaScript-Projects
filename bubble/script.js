

let plyerName1 = prompt("Enter  Red player  Name" ,"Ali");
let plyerName2 = prompt("Enter Green player  Name" ,"Saqib");
let plyerName3 = prompt("Enter Blue player  Name" ,"Moon");



//   alert("Your Color is: Red" + ' ' + plyerName1 + ' ' + "Your Color is: Green" + ' ' + plyerName2 + ' ' +"Your Color is: Blue" + ' ' +plyerName3 +' ' );





let leftArray = [];
let centerArray = [];
let rightArray = [];

let centerArrayBottom = 575;
let leftArrayBottom = 575;
let rightArrayBottom = 575;
let leftArrayLeft = 180; 
let rightArrayRight = 1110;

let redCounter = 0;
let greenCounter = 0;
let blueCounter = 0;

let stop =setInterval(() => {
    //math.floor ny point khtam krtaha 
    //Math.random() number gunrate krta ha
let num = Math.floor(Math.random()*3) + 1;
console.log(num)

//red
if (num == 1) {
    let newBall = document.createElement('img'); //red color
    newBall.src = 'red.png';
    newBall.className = 'img'
    bubbleBox.appendChild(newBall);
    newBall.style.top = leftArrayBottom + 'px';
    newBall.style.left = leftArrayLeft + 'px'
    leftArrayLeft = leftArrayLeft + 50;
    leftArrayBottom = leftArrayBottom - newBall.offsetWidth //new ball ki width nikali ha
    redCounter++;
    document.getElementById('redCounter').innerHTML = redCounter;

}

//green bubble k lia

if (num == 2){
    let newBall = document.createElement('img'); //red color
    newBall.src = 'green.png';
    newBall.className = 'img'
    bubbleBox.appendChild(newBall);
    // newBall.style.top = '575px'
    newBall.style.top = centerArrayBottom + 'px' ;//iski value ki opr di ha veriable me
    centerArrayBottom = centerArrayBottom - newBall.offsetWidth //new ball ki width nikali ha
    // centerArray.push(newBall)
    greenCounter++;
    document.getElementById('GreenCount').innerHTML = greenCounter;
}



//blue 

if (num == 3) {
    let newBall = document.createElement('img'); //red color
    newBall.src = 'blue.png';
    newBall.className = 'img'
    bubbleBox.appendChild(newBall);
    newBall.style.top = rightArrayBottom + 'px';
    newBall.style.left = rightArrayRight + 'px'
    rightArrayRight = rightArrayRight - 50;
    rightArrayBottom = rightArrayBottom - newBall.offsetWidth //new ball ki width nikali ha
    blueCounter++;
    document.getElementById('blueCounter').innerHTML = blueCounter;

}

//bubble ko stop krny k lia
// (centerArrayBottom <= 8 || rightArrayBottom <=8 || leftArrayBottom <=5)
if (redCounter >= 8 || greenCounter >=8 || blueCounter >=8) {
    
    clearInterval(stop);
    // alert("Game Over")
    // gameover.style.display = 'block'
    let gameover = document.getElementById('gameover');

    let winner = Math.max(redCounter,greenCounter,blueCounter);
    if (redCounter == 8) {
        gameover.style.backgroundColor = 'red';
// let plyerName1 = prompt("Enter  Red Plyer Name" ,"Ali");
        gameover.innerHTML = 'Game is Over </br>' + 'Total Red Balls is: ' + winner + '</br> Red is Wnner ' + ' <br>Congratulations Red player  ' +plyerName1 ;
        //  alert('Game is Over </br>' + 'Total Red Balls is ' + winner + '</br> Red');
             gameover.style.display = 'block'

    }

    if (greenCounter == 8) {
        gameover.style.backgroundColor = 'Green';
        gameover.innerHTML = 'Game is Over </br>' + 'Total Green Balls is: ' + winner + '</br> Green is Wnner ' + ' <br> Congratulations Green player  ' +plyerName2;
        // alert('Game is Over </br>' + 'Total Green Balls is ' + winner + '</br> Green');
    gameover.style.display = 'block'

    }

    if (blueCounter == 8) {
        gameover.style.backgroundColor = 'Blue';
        gameover.innerHTML = 'Game is Over </br>' + 'Total Blue Balls is: ' + winner + '</br> Blue is Wnner ' + '<br> Congratulations Blue player  ' +plyerName3;
        // alert('Game is Over </br>' + 'Total Blue Balls is ' + winner + '</br> Blue');
     gameover.style.display = 'block'

    }

}

}, 500);
