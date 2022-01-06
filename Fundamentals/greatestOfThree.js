var num1=30,num2=20,num3=40
if((num1>num2)&&(num1>num2)){
    if(num2>num3){
        console.log(`2nd largest is ${num2}`);
    }
    else{
        console.log(`2nd largest is ${num3}`);
    }
}
else if((num2>num1)&&(num2>num3)){
    if(num1>num3){
        console.log(`2nd largest is ${num1}`);
    }
    else{
        console.log(`2nd largest is ${num3}`);
    }
}
else if(num2>num1){
    console.log(`2nd largest is ${num2}`);
}
else{
    console.log(` number is ${num1}`);
}
