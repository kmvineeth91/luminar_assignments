var mobiles=[
    [1000,"samsung","samsung F-41",15000,"snapdragon","AMOLED","4G"],
    [1001,"samsung","samsung A-51",20000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","note 10 pro",18000,"snapdragon","LED","4G"],
    [1003,"redmi","mi 11 lite",16500,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4G"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4G"],
    [1007,"one plus","nord 2",16000,"mediatek","LED","4G"],

]

//q1> costly mobile
mobiles.sort((m1,m2)=>m2[3]-m1[3])
console.log(mobiles[0][3]);

//q2> snapdragon processor mobiles
for(let mobile of mobiles){
    if(mobile[4]=="snapdragon"){
        console.log(mobile[0],mobile[1]);
    }
}