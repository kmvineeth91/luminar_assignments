var students=[
    [1000,"akil","mernstack",145,"mca"],
    [1001,"anu","mernstack",165,"bca"],
    [1002,"nikil","django",145,"mca"],
    [1003,"vinil","django",165,"mca"],
    [1004,"tim","testing",185,"btech"],
    [1005,"john","testing",155,"bca"],
]
// q1> print name of all students
// for(let student of students){
//     console.log(student[1]);
// }

//print details of mernstack students
for(let student of students){
    if(student[2]=="mernstack"){
        console.log(student);
    }
}

//print students of mark >160
for(let student of students){
    if(student[3]>160){
        console.log(student[1],student[2]);
    }
}

//print names of django students marks >160
for(let student of students){
    if(student[2]=="django"&&student[3]>160){
        console.log(student);
    }
}

for(let student of students){
    if(student[2]=="django"){
        console.log(student[1]);

    }
    
}

var max_total=0
for(let student of students){
    if(student[3]>max_total){
        max_total=student[3]
    }
}
console.log(max_total);