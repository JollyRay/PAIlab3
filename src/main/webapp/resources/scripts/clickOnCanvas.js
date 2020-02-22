let Radius=3;
let scale = 150/Radius;
let canvas = document.getElementById('canvasForAllegedPoint');
let ctx = canvas.getContext('2d');
ctx.fillStyle = "rgb(0,0,255)";
canvas.onclick = function(event) {
    scale = 150/Radius;
    let coordinateX = Math.round((event.offsetX-175)/scale);
    let coordinateY = (178-event.offsetY)/scale;
    document.getElementById("form:Y").value = coordinateY;
    document.getElementById("form:X"+coordinateX).click();
    document.getElementById("form:R"+(Radius*2-1)).click();
    document.getElementById("form:checker2").click();
};

canvas.onmousemove = function (event) {
    scale = 150/Radius;
    ctx.clearRect(0, 0, 350, 350);
    let x = Math.round((event.offsetX-175)/scale)*scale+174;
    let y = event.offsetY-4;
    if (x>350)
        x=349;
    if (x<-2)
        x=-1;
    ctx.fillRect(x, y, 3, 3);
};