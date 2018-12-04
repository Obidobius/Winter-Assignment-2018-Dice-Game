//-----------------INDEX-----------------//
// 1. Variables
// 2. Player Check
// 3. Dice System
// 4. Moving System
//--4.1 Player 1
//--4.2 Player 2
// 5. Turn System
// 6. Player Location Text
// 7. Winner Redirect Page

//Get Players icons from previous Page as portrait
var player1Name = localStorage.getItem('Player 1');
var player2Name = localStorage.getItem('Player 2');

document.getElementById('leftPlayerIcon1').innerHTML += '<img class="[ selection__icon ]" src="icons/' + localStorage.getItem('Player_1_id') + '.png" />';
document.getElementById('rightPlayerIcon2').innerHTML += '<img class="[ selection__icon ]" src="icons/' + localStorage.getItem('Player_2_id') + '.png" />';

                                //-----------------1. VARIABLES-----------------//
var turn = 1;   //Players Turn
var tile = 1;   //Player 1
var tile2 = 1;  //Player 2

                            //----------------2. Players are dead or not------------//
pDeath1 = false;
pDeath2 = false;
                
var playerTile = document.getElementById(tile);     //Player 1 Tiles
var playerTile2 = document.getElementById(tile);    //Player 2 Tiles

 //Get Player Icons from previous Page as moving pieces
playerTile.innerHTML = '<img id="plr_1" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_1_id") + '.png" />';
playerTile2.innerHTML = '<img id="plr_2" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_2_id") + '.png" />';

                //----------------------------------3. Dice system-----------------------------//
var roll = {
    corners: 6,
    throw: function () {
        var randomTrow = Math.floor(Math.random() * this.corners) + 1;
        return randomTrow;
    }
};

function showPrint(result) {
    var dicePlacement = document.getElementById("dicePlacement");
    dicePlacement.innerHTML = result;
};
var terning = document.getElementById("diceRoll");
terning.onclick = function () {
    var result = roll.throw();
    moveIcons(result);
    showTiles();
    showPrint(result);
    winner(tile);
};

//------------------------------- 4. Moving current icon and Removin previous icon -------------------------//

//Trap tile Location
var traps = [5, 13, 19, 25, 29]; 
                                //-----------------4.1 Player 1-----------------//
// Trap Triggers
function movePiece() {
    let previous_pos = document.getElementById("plr_1");
    if (previous_pos) {
        previous_pos.parentNode.removeChild(previous_pos);
    }
    if (traps.indexOf(tile) !== -1) {
        if (tile === 5) {
            tile = tile - 2;
            alert("A Dire Wolf Appears, you moved back 2 steps");
        }
        else if (tile === 13) {
            tile = tile - 12;
            alert("You got Arrested from mooning Cersei, you go back to start");
        }
        else if (tile === 19) {
            tile = tile - 4;
            alert("The bridge infront have collapsed, you walk around to find another way, you go back 4 Tiles");
        }
        else if (tile === 25) {
            tile = tile - 4;
            alert("A rockslide triggers above you, you run back 4 tiles");
        }
        else if (tile === 29) {
            tile = tile - 28;
            pDeath1 = true;
            alert("A White walker appears, you die a terrible death and become one of them!");
        }
    };
    for (let i = 1; i < 31; i++) {
        if (tile === i) {
            let moves = document.getElementById(i);
            moves.innerHTML += '<img id="plr_1" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_1_id") + '.png" />';
            console.log(moves[i]);
        }
    }
};

                             //-----------------4.2 Player 2-----------------//
// Trap Triggers     
function movePiece2() {
    let previous_pos2 = document.getElementById("plr_2");
    if (previous_pos2) {
        previous_pos2.parentNode.removeChild(previous_pos2);
    }
    if (traps.indexOf(tile2) !== -1) {
        if (tile2 === 5) {
            tile2 = tile2 - 2;
            alert("A Dire Wolf Appears, you moved back 2 steps");
        }
        else if (tile2 === 13) {
            tile2 = tile2 - 12;
            alert("You got Arrested from mooning Cersei, you go back to start");
        }
        else if (tile2 === 19) {
            tile2 = tile2 - 4;
            alert("The bridge infront have collapsed, you walk around to find another way, you go back 4 Tiles");
        }
        else if (tile2 === 25) {
            tile2 = tile2 - 4;
            alert("A rockslide triggers above you, you run back 4 tiles");
        }
        else if (tile2 === 29) {
            tile2 = tile2 - 28;
            pDeath2 = true;
            alert("A White walker appears, you die a terrible death and become one of them!");
        }
    };
    for (let j = 1; j < 31; j++) {
        if (tile2 === j) {
            let moves = document.getElementById(j);
            moves.innerHTML += '<img id="plr_2" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_2_id") + '.png" />';
            console.log(moves[j]);
        }
    }
};

                         //-----------------5. TURNS----------------//

function moveIcons(result) {
    if (pDeath1 && pDeath2) {
        alert("Wtf all players are dead");
        window.location.href = "allDead.html";
    }
    if (turn === 1) {
        for (let i = 0; i < result; i++) {
            tile = tile + 1;
        }
        movePiece()
        if (!pDeath2) {
            turn = 2
            if (result === 6) {
                console.log("trigger player 1 dice")
                alert("player 1 hit 6, roll again!")
                movePiece()
                turn = 1
            }
        }
    }
    else if (turn === 2) {
        for (let i = 0; i < result; i++) {
            tile2 = tile2 + 1;
        }
        movePiece2()
        if (!pDeath1) {
            turn = 1
            if (result === 6) {
                console.log("trigger player 2 dice")
                alert("player 2 hit 6, roll again!")
                movePiece2()
                turn = 2
            }
        }
    }
};
            //---------------6. PLAYER TILE LOCATION TEXT--------------//
function showTiles() {
    var inText = document.getElementById("battleText");

    if (turn === 2) {
        inText.innerHTML = "Player 1 moved to tile: " + tile;
    }
    else {
        inText.innerHTML = "Player 2 moved to tile: " + tile2;
    }

};

                //-----------------7. Direct Winner to new Page----------------//
function winner(result) {
    if (tile > 29) {
        window.location.href = "success_Page.html";
    }
    else if (tile2 > 29) {
        window.location.href = "success_Page.html";
    }
};