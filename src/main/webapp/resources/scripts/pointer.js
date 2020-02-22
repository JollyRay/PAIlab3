function points() {
    let x;
    let y;
    let r;
    let can = document.getElementById("canvasForPoints");
    let ctx = can.getContext('2d');
    let rows;
    let nowRows=[];
    setInterval(function(){
        rows=document.getElementById("mainTabel").rows;
            if(rows!==nowRows && rows[1].cells[1].innerText!==""){
                nowRows=rows;
                let coordinateX;
                let coordinateY;
                ctx.clearRect(0, 0, 350, 350);
                for (let i = 1; i < nowRows.length; i++) {
                    let row = nowRows[i];
                    x = Number(row.cells[0].innerHTML);
                    y = Number(row.cells[1].innerHTML);
                    r = Number(row.cells[2].innerHTML);
                    if (String(row.cells[3].innerHTML.trim()) === "Промах")
                        ctx.fillStyle = "rgb(255,0,0)";
                    else
                        ctx.fillStyle = "rgb(0,255,0)";
                    ctx.beginPath();
                    if (175 + 150 / r * x >= -2) {
                        if (175 + 150 / r * x <= 348)
                            coordinateX = 175 + 150 / r * x - 2;
                        else
                            coordinateX = 348;
                    } else
                        coordinateX = -2;
                    if (175 + 150 / r * y >= 0) {
                        if (175 + 150 / r * y <= 348)
                            coordinateY = 175 - 150 / r * y - 2;
                        else
                            coordinateY = 348;
                    } else
                        coordinateY = 0;
                    ctx.fillRect(coordinateX, coordinateY, 5, 5);
                    ctx.closePath();
                }
            }
    }, 100)
}