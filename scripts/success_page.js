


function showWinner() {
    var player1 = localStorage.getItem('Player_1_id');
    let collect = document.getElementById("winner");
    console.log(player1)
    if(player1 === null || player1 === undefined || player1 === "" ) {
        alert("Player 2 has won the game");
        console.log("i should not trigger");
        collect.innerHTML = '<img id="playerTwo" src="./icons/' + localStorage.getItem("Player_2_id") + '.png" />' + "<p class='win' >Player Two Won! </p>";
    }
    else{
        alert("Player 1 has won the game");
        collect.innerHTML = '<img id="playerOne" src="./icons/' + localStorage.getItem("Player_1_id") + '.png" />' + "<p class='win' >Player One Won! </p>";
    }
};


function draw() {
    var canvas = document.getElementById('canvasPlace')
    var ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 500;
    ctx.font = '65px georgia, serif';
    ctx.fill = "black";
    ctx.fillText('Congratulations!', 12, 150);
    ctx.font = '55px georgia, serif';
    ctx.fill = "black";
    ctx.fillText('You survived!', 75,250)
    ctx.font = '26px georgia, serif';
    ctx.fillText('Lets hope George R.R dont kill you later...', 10, 530)
    
  };

draw();
