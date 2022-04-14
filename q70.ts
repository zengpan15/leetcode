function climbStairs(n: number): number {
    if(n<3){
        return n;
    }
    let a =1;
    let b =2;
    let c;
    for(let i =3;i<=n;i++){
        c=a+b;
        a=b;
        b= c;
    }
    return c;

};