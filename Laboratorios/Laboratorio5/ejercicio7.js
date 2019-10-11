function fibo(n){
    var fib;
    var n1 = 0;
    var n2 = 1;
    for (var i =0;i<n;i++){
        if (i == 0){
            console.log(n1);
        }else if(i == 1){
            console.log(n2);
        }else{
            fib = n1 + n2;
            console.log(fib);
            n1 = n2;
            n2 = fib;
        }
    }
}