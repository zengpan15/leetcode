function generate(numRows: number): number[][] {
    var arr = [];
    for(var i=0;i<numRows;i++){
        arr[i]=[];
    }
    for(var i=0;i<numRows;i++){
        arr[i][0]=1;
        arr[i][i]=1;
        for(var j=1;j<i;j++){
            arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
        }
    }
    return arr;
};