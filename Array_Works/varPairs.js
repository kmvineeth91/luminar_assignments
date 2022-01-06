var arr=[2,3,4,5]
var sum=7
for(let i of arr){
    for(let j of arr){
        if(i+j==7){
            console.log(`pairs are(${i},${j})`);
        }
    }
}