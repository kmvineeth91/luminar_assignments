var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"makt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]
]


//Q1> print all employee names
for(let employee of employees){
    console.log(employee[1]);
}

//Q2> print all developer details
for(let employee of employees){
    if(employee[3]=="developer"){
        console.log(employee);
    }
}

//Q3> print experience of each employee
for(let employee of employees){
    console.log(`Experinece of ${employee[1]} is ${employee[5]-employee[4]} years`);
}

//Q4> details of employee with more than 10yrs exp
for(let employee of employees){
    if(employee[5]-employee[4]>=10){
        console.log(employee);
    }
}

//Q5>Print highest salary
high_salary=0
for(let emp of employees){
    if(emp[2]>high_salary)
    {
        high_salary=emp[2]
    }
}
console.log(high_salary);

//Q6> 2nd highest salary
var salary=[]
for(let emp of employees){
    salary.push(emp[2])
}
salary.sort((n1,n2)=>n2-n1)
console.log("2nd highest salary",salary[2]);

//Q7> lowest salary
var salary=[]
for(let emp of employees){
    salary.push(emp[2])
}
salary.sort((n1,n2)=>n1-n2)
console.log("lowest salary",salary[0]);

//Q8> highest salary amoung developers
var sal=[]
for(let emp of employees){
    if(emp[3]=="developer"){
        sal.push(emp[2])
    }
}
sal.sort((n1,n2)=>n2-n1)
console.log("highest salary amoung developers is",sal[0]);

//Q8> print details of employees who work within 2010 to 2015
for(let empl of employees){
    if(empl[4]>2009 && empl[5]<2016){
        console.log(empl);
    }
}
