// 1. Ways to print in javascript
// console.log("Hello world");
// document.write("this is document write");

// 2.Javascript Console API (Application programming interface)
// console.log("Hello world");
// console.warn("This is warninig");
// console.error("This is an error");

// 3.JavaScript Variables
// what are variables? - containers to store data values
 var num1 = 67;
 var num2 = 56;
//  console.log(num1 + num2);

// 4. Data types in Javascript
// Numbers
 var num1 = 562;
 var num2 = 23.45;
 
//  String
var Str = "This is a string";
var str1 = "This is also a string";

// Objects
 var marks = {
    shubham : 34,
     Rohit : 67,
      Virat : 67
    }
    // console.log(marks);

    // Booleans
    var a = true;
    var b = false;
//  console.log(a,b);

// var und = undefined;
var und;
// console.log(und);    

var n = null;
// console.log(n);
/*
At a very high level,there are two types of data types in JavaScript
1.Primitive Data types : null,undefined,string,boolean,Symbol
1.Reference Data types : Arrays and Objects 
*/

var arr = [1,2,"tom",4,5]
// console.log(arr);

// Operators in JavaScript
// Arithmatic Operators
var a = 100;
var b = 10;
// console.log("the value of a+b is ", a + b);
// console.log("the value of a-b is ", a - b);
// console.log("the value of a*b is ", a * b);
// console.log("the value of a/b is ", a / b);

// Assingment Operators
var c = b ;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 67;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

// Logical Operators

// Logical and
// console.log(true && false)
// console.log(true && true)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// Functions in JavaScript

function avg (a , b)
{
     c = (a + b)/2;
     return c;
}
// DRY = Do not repeat yourself
c1 = avg (34,56);
c2 = avg (12,14);
// console.log(c1,c2);

// Conditionals in JavaScript
// if-else statements
// var age = 4;
// if (age > 18)
// {
//     console.log('You can vote now');
// }
// else {
//     console.log('You cannot vote now');
// }
/*
// if-else Ladder
 age = 34;
if (age < 8){
    console.log('Your a kid');
}
else if(age < 18){
    console.log('Your a teenager now');
}
else if (age < 33){
    console.log('Your a young now');
}
else{
    console.log('Your old now');
}
console.log('end of ladder');
*/

// Loops
// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i = 0;i < arr.length;i++)
// {
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(Element)
// {
//     console.log(Element)
// })

// const ac = 0;
// ac++;
// ac = ac + 1;

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;

// }while (j < arr.length);


// let myarr = ["fan","cooler",34,56,7686,true];
// Array Method
// console.log(myarr.length);
// myarr.pop();
// myarr.push("tom");
// myarr.shift()
// console.log(myarr.unshift("tom"));
// const newlen = myarr.unshift("tom");
// console.log(newlen);
// console.log(myarr);

// String Methods in JavaScript

let myLovelyString = "Tom is very good good boy.";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("very") );
// console.log(myLovelyString.lastIndexOf("very"));

// console.log(myLovelyString.slice(1,5));
d = myLovelyString.replace("Tom","Jerry");
// console.log(d,myLovelyString);

let mydate = new Date();
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());

// DOM Manipulation (Document Object Module)

let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is created bold";
// tn[0].replaceChild(createdElement2, createdElement);

// removeChild(Element); -----> removes an Element

// Selection using query

// sel = document.querySelector('.container');
// console.log(sel);

// sel = document.querySelectorAll('.container');
// console.log(sel);


// function clicked(){
//     console.log('The button was clicked');
// }

// window.onload = function(){
//     console.log("The document was loaded");
// }

// Events in JavaScript
// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked</b>"
//     console.log("Clicked on container");
// })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container");
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("mouse out of container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
// console.log("Mouse up when clicked on container");
// })

// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked</b>"
//     console.log("Mouse down when clicked on container");
// })


// Arrow Function
// function summ(a,b){
//      return a+b;
// }

summ = (a,b)=>{
    return a + b;
}

logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have setTimeout fired</b>"
    console.log("I am your log.")
}

// setTimeout and setInterval
// clr = setTimeout(logkaro, 2000);
// clr = setInterval(logkaro, 2000);
// --- use clearInterval/clearTimeout to cancel setInterval/setTimeout

//JavaScript localStorage
// localStorage.setItem('name','Tom')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// JSON
// Obj = {name :"Tom",length: 1, a: {this :"that"}}
// jso = JSON.stringify(Obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse(`{"name":"Tom","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

// Template literals - Backticks
a = 23;
console.log(`This is my ${a}`);
