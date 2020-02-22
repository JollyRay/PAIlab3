function proverka2(input) {
    let value = input.value;
    let rep = /[0-9]/;
    if (value!=="-")
    if (rep.test(value)) { 
        value = /-?[0-9]+[\.\,]?[0-9]*/.exec(value);
        input.value = value; 
    }else{
		input.value ='';
	}
    let val = Number(input.value);
    let placeFromMessage = document.getElementById('messageAboutError');
    if (val>=-5 && val <=3){
        placeFromMessage.innerHTML ="";
    }else{
        placeFromMessage = document.getElementById('messageAboutError');
        placeFromMessage.innerHTML = "&notin;[-5;3]";
    }
}