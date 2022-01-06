function displayNum(num){
 res.value+=num
}
function clearBox(){
    res.value=""
}

function evaluateExpression(){
    res.value=eval(res.value)
}

function backSpace(){
    res.value = res.value.slice(0, - 1);
}