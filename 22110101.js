var count = 0;

myFnc();

function myFnc(){ // 일반적 함수선언방식
    count++;
    document.write("hello" + count, "<br>");
}

myFnc(); //전에 일반적 함수선언에서 호출됨, 임시적 함수선언에서 호출되지 않음
//count는 2
//theFnc(); 이 위치에서 호출 X

var theFnc = function(){ //임시적 함수선언방식
    count++; //3
    document.write("bye" + count, "<br>");
}

theFnc();