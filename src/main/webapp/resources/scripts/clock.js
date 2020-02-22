function clock() {
    setInterval(function () {
        let data = new Date();
        let hour = data.getHours();
        let min = data.getMinutes();
        let sec = data.getSeconds();
        document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
    }, 10000)
}

function setTime() {
    let data = new Date();
    let hour = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    let elem = document.getElementById("clock");
    elem.innerHTML = hour + ":" + min + ":" + sec;
    let boom = setInterval(function () {
        let now = new Date() - data;
        elem.style.left = 50*Math.random()-25+"px";
        elem.style.top = 50*Math.random()-25+"px";
        if (now>700){
            clearInterval(boom);
            elem.style.left = "0px";
            elem.style.top = "0px";
        }
    }, 10)

}