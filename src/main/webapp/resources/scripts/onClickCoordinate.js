let counterX = {value:0};  //Ссылки, ибо примитивы не передаются...
let counterR = {value:0};
function onClickX(event){
    GrowUp(event.target, counterX);
    let checkboxes = Array.from(document.querySelectorAll('a[style="font-size: 22px; color: rgb(255, 0, 0);"]'));
    checkboxes.forEach(elem => {if (elem!==event.target) rollBack(22, 253, elem)})
}
function onClickR(event){
    Radius= Number(event.target.innerText.trim()); //Переменная из clickOnCanvas.js для радиусу при клику по канвасу
    GrowUp(event.target, counterR);
    let checkboxes = Array.from(document.querySelectorAll('a[style="font-size: 22px; color: rgb(254, 0, 0);"]'));
    checkboxes.forEach(elem => {if (elem!==event.target) rollBack(22, 253, elem)})
}

function GrowUp(element, counter) {
    let timer;
    let start = Date.now();
    let timePassed=0;
    let elementStyle =element.style;
    if (element.style.fontSize !== "22px") {
        console.log(++counter.value);
        timer = setInterval(function () {
            timePassed = Date.now() - start;
            elementStyle.fontSize = (16 + timePassed / 166) + 'px';
            elementStyle.color="rgb("+timePassed/4+",0,0)";
            if (timePassed > 1000) {
                elementStyle.fontSize="22px";
                if (counter===counterX)
                    elementStyle.color="rgb(255,0,0)";
                else
                    elementStyle.color="rgb(254,0,0)";
                clearInterval(timer);
                console.log(counter.value=0);
            }
            if (timePassed>0 && counter.value>1){
                console.log(--counter.value);
                clearInterval(timer);
                rollBack(16+timePassed/250, timePassed/4, element);
            }
        }, 10);
    }

}

function rollBack(fount,color, element) {
    let elementStyle = element.style;
    if (elementStyle.fontSize!=="16px") {
        let start = new Date();
        let newTimer = setInterval(function () {
            let timePassed = Date.now() - start;
            elementStyle.fontSize = (fount - timePassed / 166) + 'px';
            elementStyle.color="rgb("+(color-timePassed/4)+",0,0)";
            if (fount - timePassed / 166 <= 16) {
                elementStyle.color="rgb(0,0,0)";
                elementStyle.fontSize = "16px";
                clearInterval(newTimer);
            }
        }, 10)
    }
}

function spamBlock() { //Я из будущего, удали эту штуку, как поймёшь где ошибка
    setInterval(function () {
        if(counterX.value>1){
            counterX.value=0;
            // putOnFinalButton();
            console.log("Произошло замыкание X, выполняются исправления");
        }
        if(counterR.value>1){
            counterR.value=0;
            // putOnFinalButton();
            console.log("Произошло замыкание R, выполняются исправления");
        }
    }, 2000)

}





