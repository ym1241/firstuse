function chColor() {
    var arrColor = ["#ff0", "#6c0", "#fcf","#cf0","#39f"];
    var arrNum = Math.floor(Math.random()* arrColor.length);
    var bodyTag = document.getElementById("theBody");
    bodyTag.style.backgroundColor = arrColor[arrNum];
}
