// console.log("hemllo");
//19-02-2025
//task-1

function processNumber(a,b,func){
    return func(a,b)
}

var result = processNumber(3,4,function(a,b){return a+b})

console.log("Sum :"+result);    

//task-2
function greet(a){
    return a("Alice")
}
var out=greet(function(name){return "Hello "+name+" !"})

console.log(out);

//task-3

function calculate(a,b,func){
    return func(a,b)
}
var differnce = calculate(10,5,(a,b)=>a-b)
console.log("Difference:"+differnce);

