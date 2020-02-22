function draw(){
    let can = document.getElementById('canvas');
    let ctx = can.getContext('2d');
    let color = "rgb(4,172,208)"
    ctx.clearRect(0, 0, 350, 350);
    ctx.lineWidth =2;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    ctx.fillRect(175, 25, 150, 150);

    ctx.moveTo(100, 175);
    ctx.lineTo(175, 175);
    ctx.lineTo(175, 325);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(175, 175, 75, 0,  Math.PI/2, false);
    ctx.lineTo(175, 175);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "red";
    ctx.moveTo(0, 175);
    ctx.lineTo(350, 175);
    ctx.lineTo(340, 185);
    ctx.lineTo(350, 175);
    ctx.lineTo(340, 165);
    ctx.lineTo(350, 175);
    ctx.stroke();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(175, 350);
    ctx.lineTo(175, 0);
    ctx.lineTo(185, 10);
    ctx.lineTo(175, 0);
    ctx.lineTo(165, 10);
    ctx.lineTo(175, 0);
    ctx.stroke();
    ctx.stroke();

    for(let i=0; i<5; i++){
        ctx.beginPath();
        ctx.moveTo(170, 25+75*i);
        ctx.lineTo(180, 25+75*i);
        ctx.stroke();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(25+75*i, 170);
        ctx.lineTo(25+75*i, 180);
        ctx.stroke();
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "20pt Arial";
    ctx.fillText("R", 180, 32);
    ctx.fillText("-R", 180, 330);
    ctx.fillText("R/2", 180, 107);
    ctx.fillText("-R/2", 180, 255);
    ctx.fillText("R", 315, 165);
    ctx.fillText("-R", 11, 165);
    ctx.fillText("R/2", 240, 165);
    ctx.fillText("-R/2", 81, 165);

}