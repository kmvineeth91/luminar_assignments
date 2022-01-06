var arr=[10,54,15,78,20]
var element=15
var flag=0
for(let num of arr){
    if(element==arr){
        flag=1;
        break;
    }
}
console.log(flag==0?"element not found":"elemnt found");