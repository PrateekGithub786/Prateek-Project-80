function getPara1(){
    var inputs = [];
    for(var i = 1; i<=6; i++){
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}

function getPara2(){
    var inputs = [];
    for(var j = 1; j<=6; j++){
        inputs.push(document.getElementById("para2_input_box_" + j).value);
        inputs.join(". ");
    }
    
    document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
}