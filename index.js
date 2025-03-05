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

//1. Find the Larger Number with a Callback
// Instructions:
// Define a function findLarger(num1, num2, callback).
// The callback should return the larger number using only if statements (no logical operators).
// The return value of the callback should be increased by 5 before returning.
// Print the final result.
// Example Input & Expected Output:
// Input: findLarger(12, 20, callback)
// Expected Output: 25

function findLarger(num1,num2,callback){
    var result = callback(num1,num2)
    console.log(result);
}

findLarger(13,22,(a,b)=>{if(a>b){return a+5} else{return b+5}})

    // 2. Sum or Difference with a Callback
    // Instructions:
    // Define a function calculate(num1, num2, callback).
    // The callback should return:
    // The sum if num1 > num2.
    // The difference if num2 > num1.
    // 0 if both numbers are equal.
    // Multiply the return value by 3 before returning.
    // Print the final result.

function calculate(num1,num2,callback){
    var result = callback(num1,num2)
    console.log(result);
}

calculate(10,5,(a,b)=>{if (a>b){ return (a+b)*3} if (a<b){ return (b-a)*3} else{return 0}})

    // 3. Even or Odd with a Callback
    // Instructions:
    // Define a function checkEvenOdd(num, callback).
    // The callback should return "Even" if num is divisible by 2, otherwise "Odd".
    // The function should return "Even Number" or "Odd Number" based on the callback result.
    // Use only if statements, no logical operators.
    // Example Input & Expected Output:
    // Input: checkEvenOdd(8, callback)
    // Expected Output: "Even Number"

    function checkEvenOdd(num,callback){
        console.log(callback(num));
    }

    // var check = function (a){
    //     if (a%2==0){return "Even Number"} else{ return "Odd Number"}
    // }
    checkEvenOdd(5,(a)=>{if (a%2==0){ return "even number"} else{ return "odd number"}})
    
        // 4. Positive, Negative, or Zero with a Callback
        // Instructions:
        // Define a function checkSign(num, callback).
        // The callback should return:
        // "Positive" if num > 0.
        // "Negative" if num < 0.
        // "Zero" if num === 0.
        // Append " value" to the callback’s return value.
        // Print the final result.
    
    function checkSign(num,callback){
        var result = callback(num)+" value"
        console.log(result);
    }

    checkSign(-11,(a)=>{if (a>0){return "Postive"}else if(a<0){ return "Negative"} else if(a===0){ return "Zero"}})

//         5. Multiply by Condition with a Callback
// Instructions:
// Define a function multiplyConditionally(num1, num2, callback).
// The callback should return:
// num1 * num2 if num1 > num2.
// num1 + num2 if num2 > num1.
// num1 if both numbers are equal.
// Multiply the return value by 4 before returning.
// Print the final result.
// Example Input & Expected Output:
// Input: multiplyConditionally(4, 6, callback)
// Expected Output: 40


    function multiplyConditionally(num1,num2,callback){
        var result = callback(num1,num2)*4
        console.log(result);
    }

    multiplyConditionally(5,8,(a,b)=>{if(a>b){return a*b}else if(b>a){return a+b} else if(a===b){return a}})

    //03-03-25
    //Write a for loop to print numbers from 1 to 10.

    for(var a =1;a<=10;a++){
        console.log(a);
    }

    //Write a for loop to calculate the sum of all numbers from 1 to 100.
    let sum = 0
    for(var a = 1;a<=100;a++){
        sum = sum + a
    }
    console.log(sum);

    //Write a for loop to print the multiplication table of 7 (up to 10).
    
    for( let i =1;i<=10;i++){
        console.log(`7 x ${i} = ${7*i}`);
    }

    //Write a for loop to print all even numbers between 1 and 20.

    for( let i = 1;i<=20;i++){
        if i%2==0{
            console.log(i);
        }
    }

    //Write a for loop to calculate the factorial of a number (e.g., 5!).
    let factorial=1
    for(let i =1;i<=5;i++){
        factorial*=i
    }
    console.log(factorial);

    //Write a for loop to calculate the power of a number (e.g., 2^5).

    let exp=5
    let base=2
    let power=1
    for (let i =1; i<=exp;i++){
        power=power*base
    }
    console.log(power);

    //Write a for loop to print all odd numbers between 20 and 1 in reverse order
    for(let i =19 ; i>=1 ;i--){
        if(i%2!=0){
            console.log(i);
        }
    }

    //06-03-25

//     1. Create an Array
//  Create an array with five numbers and print it.

var arr = [1,2,3,4,5]
console.log(arr);
// 2. Access an Element
//  Given an array, print the third element
console.log(arr[2]);
// 3. Change an Element
//  Modify the second element of an array to a new value
arr[1]=9
// 4. Find Length
//  Write a function that returns the length of an array
console.log(arr.length);
// 5. Add an Element (Push)
// Add a new element to the end of an array
arr.push(8)
console.log(arr);
// 6. Remove the Last Element (Pop)
// Remove the last element from an array and print the updated array
arr.pop()
console.log(arr);
// 7. Loop Through an Array
// Use a loop to print each element of an array
for( var element of arr){
    console.log(element);
}
// 8. Check if an Element Exists
// Write a function to check if a given value exists in an array.
function elementExists(arr, value) {
    return arr.includes(value);
  }
  elementExists(arr,3)
//   9. Copy an Array
//   Create a copy of an array and print it
var copiedArray = [];
for (var i = 0; i < arr.length; i++){
  copiedArray.push(arr[i]);
}
// 10. Convert Array to String
//  Convert an array to a string using .join()
// .join() and print the result
let arrayString = arr.join(",");
  console.log(arrayString);
