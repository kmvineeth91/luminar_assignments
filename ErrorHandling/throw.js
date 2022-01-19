// try{
//     var phone="96239712635"
//     if(phone.length!=10){
//         throw new Error("enter valid phone number")
//     }
// }
// catch(error){
//     console.log(error.message);
// }
// console.log("valid number");

try{
    var age="kj"
    if(isNaN(age)){
        throw new Error("invalid age")
    }
}
catch(error){
    console.log(error.message);
}
console.log("erroer");