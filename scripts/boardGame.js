//DICE ROLL
var turn = 1;

var roll = {
    corners: 6,
    throw: function(){
        var randomTrow = Math.floor(Math.random()* this.corners) +1;
        return randomTrow;
    }
}

function showPrint(result){
    var dicePlacement = document.getElementById("dicePlacement");
    console.log(result);
    dicePlacement.innerHTML = result;
};

var terning = document.getElementById("diceRoll");
terning.onclick = function(){
    var result = roll.throw();
    showPrint(result);
    moveIcons(result);
};

//-------------------------------------------Variables --------------------------------------------//
var tile = 1;
var playerTile = document.getElementById(tile);


//        tile.appendchild(playOne);
function moveIcons(result){
    if(turn === 1) {
        turn = 2;
        //moving stuff for player one
        player2Text
    }
    else{
    turn = 1;
        //moving stuff for player two
        player2Text
    }
  for( var i = 0; i < result; i++ ){
    tile = tile + 1;

    console.log("Tile: " + tile);
  }
  playerTile = document.getElementById(tile);
  console.log(playerTile);
};


//---------------------------------GET ICONS IN PLAYER WINDOW--------------------------------------//
switch (localStorage.getItem("Player 1")){
    case "The Daughter of the Dusk":
     var playOne = document.getElementById("leftPlayerIcon1");
     playOne.innerHTML = '<img class="[ selection__icon ]" src="icons/0.png"  />';
     break;

     case "Hodor":
     var playerOne = document.getElementById("leftPlayerIcon1");
     playerOne.innerHTML += '<img class="[ selection__icon ]" src="icons/1.png"  />';
     break;

     case "Lamprey":
     var playerOne = document.getElementById("leftPlayerIcon1");
     playerOne.innerHTML += '<img class="[ selection__icon ]" src="icons/2.png"  />';
     break;

     case "The Merling Queen":
     var playerOne = document.getElementById("leftPlayerIcon1");
     playerOne.innerHTML += '<img class="[ selection__icon ]" src="icons/3.png"  />';
     break;

     case "Old Crackbones":
     var playerOne = document.getElementById("leftPlayerIcon1");
     playerOne.innerHTML += '<img class="[ selection__icon ]" src="icons/4.png"  />';
     break;

     case "The Poetess":
     var playerOne = document.getElementById("leftPlayerIcon1");
     playerOne.innerHTML += '<img class="[ selection__icon ]" src="icons/5.png"  />';
     break;

     case "Porridge":
     var playerOne = document.getElementById("leftPlayerIcon1");
     playOne.innerHTML += '<img class="[ selection__icon ]" src="icons/6.png" />';
     break;

     case "Quickfinger":
     var playerOne = document.getElementById("leftPlayerIcon1");
     playerOne.innerHTML += '<img class="[ selection__icon ]" src="icons/7.png"  />';
     break;

     case "the Sailor's Wife":
     var playerOne = document.getElementById("leftPlayerIcon1");
   
     playerOne.innerHTML += '<img class="[ selection__icon ]" src="icons/8.png"  />';
     break;

     case "The Veiled Lady":
     var playerOne = document.getElementById("leftPlayerIcon1");
     playerOne.innerHTML += '<img class="[ selection__icon ]" src="icons/9.png"  />';
     break;
};

//PLAYER TWO
switch (localStorage.getItem("Player 2")){
    case "The Daughter of the Dusk":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/0.png"  />';
    break;

    case "Hodor":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/1.png"  />';
    break;

    case "Lamprey":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/2.png" />';
    break;

    case "The Merling Queen":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/3.png" />';
    break;

    case "Old Crackbones":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/4.png"  />';
    break;

    case "The Poetess":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/5.png"  />';
    break;

    case "Porridge":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/6.png" />';
    break;

    case "Quickfinger":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/7.png" />';
    break;

    case "the Sailor's Wife":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/8.png" />';
    break;

    case "The Veiled Lady":
    var playerTwo = document.getElementById("rightPlayerIcon2");
    playerTwo.innerHTML += '<img class="[ selection__icon ]" src="icons/9.png" />';
    break;
};
//--------------------------------------LOCALSTORAGE----------------------------------------//

function getplayerOne(){
    var retrieve = localStorage.getItem("Player 1");
    var p1 = document.getElementById("leftPlayerIcon1");
    var firstPlayer = document.createElement("p");
    firstPlayer.setAttribute("class","iconInput");
    var player1Text = document.createTextNode(retrieve);
    firstPlayer.appendChild(player1Text);
    p1.appendChild(firstPlayer); 
    console.log(retrieve);
};
getplayerOne();

//Player 2
function getplayerTwo(){
    var retrieve2 = localStorage.getItem("Player 2");
    var p2 = document.getElementById("rightPlayerIcon2");
    var secondPlayer = document.createElement("p");
    secondPlayer.setAttribute("class","iconInput");
    var player2Text = document.createTextNode(retrieve2);
    secondPlayer.appendChild(player2Text);
    p2.appendChild(secondPlayer); 
        console.log(retrieve2);
};
getplayerTwo();

//--------------------------------------CONNECT INFO------------------------------------------//
function collectplayerinfo(myJson, playersTurn) {
    console.log(myJson)
    for (var i = 0; i < myJson.length; i++) {
        if (playersTurn == 1) {
            var player1 = document.getElementById("playerOne");
            //P
            var text = document.createElement("p");
            text.innerHTML = myJson[i].aliases;
            player1.appendChild(text);
        }
        else {
            document.getElementById("playerTwo");
            var player2 = document.getElementById("playerTwo");
            //P
            var text = document.createElement("p");
            text.innerHTML = myJson.aliases[i];
            player2.appendChild(text);
        }
    }
};
//-------------------------------------GET ICON AT START POINT---------------------------//
var starticon = document.getElementById(tile);
var portraits = document.getElementById(leftPlayerIcon1);
starticon.appendChild(portraits);

//Tasks
//Connect players to board
// Connect dice to players
//make turn player die
//Make end goal react
//congrat winner
//Create Traps


// anyways not sure what you did there but I think you should start over with this script
// You have the url inside local storage

//1. make two fetches to get the details for each character because we saved a url.
//2. create a function that rolls a dice. Math.Random() method from one to six.
// When you done with these two tasks let me know ok.... Then we will move on to the next parts. =/ i already have the dice done, and it 
//follows the tiles on the gameboard
// ok what are you needing to do now?
// import the icon ..sec..to the first tile. thats the first task ive set
// ok so lets do this can I see what you have in local storage?
//the name. only the name tho. thats why im using the switch statement
// remember when we came from the select page we saved stuff in local storage which was a URL?
//i changed it to alias instead as it ..well it didnt bring me anything else. it was only the alias i needed.
//the icons is something ive got on the pc and not the url
// I know that but you need the URL this switch is too heavy to keep here, Did you change my code?
//maybe  <.<