function mySqrt(x: number): number {
    if(x==0){
        return 0;
    }
    var a = 1;
    var b = Math.floor(x/2);
    while(a<b){
        var mid = Math.floor((b+a)/2)+1;
        if(mid*mid>x){
            b= mid -1;
        }
        else{
            a= mid;
        }
    }
    return a;


};