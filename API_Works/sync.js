console.log("line 1");
console.log("line 2");
setTimeout(()=>{
    console.log("line 3.0");
},3000)
setTimeout(()=>{
    console.log("line 3");
},0)
setTimeout(()=>{
    console.log("line 2.9");
},0)
console.log("line 4");
console.log("line 5");

