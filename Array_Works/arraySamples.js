var arr=[9,6,7,8,3,2]
var op=[]
// for(let number of arr){
//     if(number>5){
//         op.push(number+1)
//     }else{
//         op.push(number-1)
//     }
// }
// console.log(op);

for(let num of arr){
    num>5?op.push(num+1):op.push(num-1)
}
console.log(op);