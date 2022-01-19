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

var mob_names=mobiles.map(mob=>mob[2])
//console.log(mob_names);

var mob_price=mobiles.map(price=>price[3])
//console.log(mob_price);

//list samsaung mobiles
var sam_mob=mobiles.filter(mob=>mob[1]=="samsung")
//console.log(sam_mob);

//print all mobiles under 15k
var low_mob=mobiles.filter(mob=>mob<25000)
console.log(low_mob);
   





// //q1> costly mobile
// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// //console.log(mobiles[0][3]);

// //q2> snapdragon processor mobiles
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon"){
//         //console.log(mobile[0],mobile[1]);
//     }
// }

//q3> print costly mobile with snapdragon and 5g

// var snap_5g=[]
// for(let mob of mobiles){
//     if(mob[4]=="snapdragon" && mob[6]=="5G"){
//         snap_5g.push(mob)
//     }
// }
// //console.log(snap_5g);
// snap_5g.sort((m1,m2)=>m1[3]-m2[3])
// console.log(snap_5g[0][3]);

//q4> price less than 10k

