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