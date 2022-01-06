// function smartSub(num1,num2){
//     if(num1>num2){
//         return num1-num2
//     }
//     else{
//         return num2-num1
//     }
// }

// console.log(smartSub(50,30));

// var smartSub=(num1,num2)=>num1>num2?num1-num2:num2-num1
// console.log(smartSub(40,50));

// function isStartWithA(name){
//     if(name[0]=="a"){
//         return true
//     }else{
//         return false
//     }
// }

// var isStartWithA=(name1)=>name1[0]=="a"?true:false

// console.log(isStartWithA("arun"));

// function validNumber(phone){
//     if(phone.length>10){
//         return false
//     }else{
//         return true
//     }
// }
// console.log(validNumber("9562369763"));

// var validNumber=(phone)=>phone.length>10?false:true
// console.log(validNumber("95623697612"));

function largestOfTwo(num1,num2){
    if(num1>num2){
        return num1
    }
    else{
        return num2
    }
}

var largestOfTwo=(num1,num2)=>num1>num2?num1:num2
console.log(largestOfTwo(10,10));