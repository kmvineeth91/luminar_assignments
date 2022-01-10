var pattern="ABCC"
var op=[]
for(let char of pattern){
    if(op.includes(char)){
        console.log(char,"is the recursive character");
        break
    }
    else{
        op.push(char)
}
}