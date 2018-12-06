var winner = localStorage.getItem('player 1');
var winner2 = localStorage.getItem('player 2');


function showWinner(){
    if(winner === localStorage.getItem('player 1')){
        let collect = document.getElementsByClassName("winner");
        collect.innerHTML = '<img id="plr_1" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_1_id") + '.png" />';
        console.log("i am player one");
    }
    else if(winner2 === localStorage.getItem('player 2')){
        let collect2 = document.getElementsByClassName("winner");
        collect.innerHTML = '<img id="plr_2" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_2_id") + '.png" />';
        console.log("i am player 2");
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

