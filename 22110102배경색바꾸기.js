var color = ["white", "yellow", "aqua", "purple"];

var i = 0;
function changeColor(){ //일반적 함수선언
    i++;
    if(i>=color.length){
        i=0;
    }

    var bodyTag = document.getElementById("theBody"); //?
    bodyTag.style.backgroundColor = color[i];
}
