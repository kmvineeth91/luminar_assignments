
// var empNames=["anu","manu","nilu","milu"]
// for(let name of empNames){
//     console.log(name);
// }

var expenses=[500,2000,2000,3000,4000]
var sum=0
for(let amount of expenses){
    sum=sum+amount   
}
console.log('Total expense',sum);

//maximum expense

var maximumExpense=0
for(let amount of expenses){
    if(amount>maximumExpense){
        maximumExpense=amount
    }
}
console.log('Maximum Expense',maximumExpense);

var minimumExpense=expenses[0];
for(let amount of expenses){
    if(minimumExpense>amount){
        minimumExpense=amount
    }
}
console.log('Minimum Expense',minimumExpense);
expenses.push(7000)
console.log(expenses);

//remove duplicate elements
var st=new Set()
for(let amount of expenses){
    st.add(amount)
}
console.log(st);
 
console.log(expenses.includes(3000));

var unique=[]
for(let amount of expenses){
    if(unique.includes(amount)){

    }
    else{
        unique.push(amount)
    }
}
console.log(unique);


