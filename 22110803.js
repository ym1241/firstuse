var num = 100;
(function(){
function menu() {
    num += 100;
    alert(num);
}
menu(); //200
}());
(function(){
function menu() {
    alert(num);
}
menu();//300?
}());