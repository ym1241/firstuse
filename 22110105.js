function sum(){
    var sum = 0;
    for(var i = 0; i<arguments.length; i++){
        sum += arguments[i]; //총 더하는거 10,20,30
    }
    document.write(sum);
}

sum(10,20,30);