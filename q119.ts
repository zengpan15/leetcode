function getRow(rowIndex: number): number[] {
    var Row=[]
    for(var i=0;i<rowIndex+1;i++){
        var row=new Array(i+1).fill(1)
        for(let j=1;j<row.length-1;j++){
            row[j]=Row[i-1][j-1]+Row[i-1][j]
        }
        Row.push(row)
    }
    return Row[Row.length-1];

};