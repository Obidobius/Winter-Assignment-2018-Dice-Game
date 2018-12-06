var winner1 = localStorage.getItem('player_01_id');
var winner2 = localStorage.getItem('player_02_id');
var collect = document.getElementsByClassName("winner");


function showWinner(winner){
    if(winner1 === localStorage.getItem('player_01_id')){
        let collect = document.getElementById("winner");
        collect.innerHTML = '<img src="../icons/' + localStorage.getItem("Player_1_id") + '.png" />' + "Player One Won";
    }
    else{
        let collect = document.getElementById("winner");
        collect.innerHTML = '<img src="../icons/' + localStorage.getItem("Player_2_id") + '.png" />' + "Player Two Won";
    }
};


function draw() {
    var canvas = document.getElementById('canvasPlace')
    var ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 800;
    ctx.font = '70px Playfair Display SC, serif';
    ctx.fill = "black";
    ctx.fillText('Congratulations!', 60, 80);
    ctx.font = '35px Playfair Display SC, serif';
    ctx.fill = "black";
    ctx.fillText('You survived!', 260,140)
    
  };

draw();
function animate(){

}

