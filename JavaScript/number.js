//Converation ....

/*console.log("1"+2);
console.log(true-1);
console.log("10"-2);
console.log(Number("123"));//123
console.log(Number("abc"));//NaN
console.log(String(124));//124
console.log(Boolean(""));//false
console.log(Boolean(0));//false
console.log(Boolean("hi"));*///true

// If Condition...

/*if(0){ console.log("False");}
if(false){ console.log("False");}
if(-0){   console.log("False");}
if(null){  console.log("False");}
if(""){ console.log("False");}
if(undefined){ console.log("False");}
if(NaN){  console.log("False");}
if(1){  console.log("True");} */

//(==,===)

/*console.log("5"==5);
console.log(""==false);//double equal to (type converstion)
console.log("5"===5);// trible equal to (no type converstion)
console.log(""===false);
*/

//variable..

/* let age=18;// cannot redeclare
age=20;
console.log(age);

var age1=18;//can redeclare/
var age1=20;
console.log(age1);

const age2=10;
console.log(age2); */

//HOSSTING

/* console.log(x);
var x=10; //let x=10 ->Error come for let not var keyword var-> undefined
 */

//function...

/* function exa(){
    if(1){
        var count=10;//it can access within the function anywhere
        let x=20;// without the condition block only access the variable(block scope variable)
    }
    console.log(count); 
    //console.log(x);// ERROR 
    
}
exa();
 */

/* function greet(){
    console.log("Hello");
}
greet();//call function after declaration
Hello();//call function before declaration
function Hello(){
    console.log("Hi");
    
}
 */
//function Expression ...one function can assign to the variable is known as func Expression

/* const fun=function(){
    console.log("Function Expression"); 
};
fun(); */
/* const fun=function fun1(){
    console.log("Function Expression named Function"); 
};
fun();  */

//Callback function (fun is passede as an argu to another fun)

/* function process(callback){ //Higher order function
    console.log("Processing..");
    callback();   
}
function done(){        // Callback function
    console.log("Done!..."); 
}
process(done); */

//Arrow function ...

/* const greetArrow = (name)=>{
    return "Hi.."+name;
}
console.log(greetArrow("Nathiya"));

const add=(a,b)=>a+b;
console.log(add(5,4)); */

//Arrays

/* const fruit = ['apple','mango'];
const newLength =fruit.push('orange'); //push add the element at end 
console.log(fruit);
console.log(newLength);
console.log(fruit.length + " Length");
 */

/* const fruit = ['apple','mango'];
const newLength =fruit.unshift('orange');//add the element in the begin 
console.log(fruit);
console.log(newLength); */

/* const fruit = ['apple','mango'];
const newLength =fruit.pop('mango');
console.log(fruit);
console.log(newLength);
 */
/* const fruit = ['apple','mango'];
const newLength =fruit.shift('orange');
console.log(fruit);
console.log(newLength); */

/* let fruit=["apple","mango","orange","pine"];
let sliced=fruit.slice(1,3);
let sliced2=fruit.slice(-1);
console.log(fruit);
console.log(sliced);
console.log(sliced2); */

/* let fruit=["apple","mango","orange","pine"];
let remove=fruit.splice(1,2);

console.log(fruit);
console.log(remove);
fruit.splice(1,0,"kiwi","berry");
console.log(fruit);
fruit.splice(2,1,"stberry");
console.log(fruit); */

/* let fruit=["apple","mango","orange","pine"];///return bollean value
console.log(fruit.includes("mango")); */

/* let number=[1,2,5,12,15];
let found=number.find(num=>num>10); //12,15 friswt element greater than 10
let even=number.find(num=>num%2==0);//2,12
console.log(found);//12
console.log(even);//2

let fruit=["apple","mango","orange","pine"];
let gre=fruit.find(word=>word.length>5);
console.log(gre); */

/* let num=[1,2,3,4];
let dou=num.map(n=>n*2);
console.log(num);
console.log(dou); */

/* let number=[1,2,5,12,15];
let found=number.map(num=>num>10);
console.log(found); */

/* let price=[200,350];
let tra=price.map(n=>n+100);
console.log(price);
console.log(tra); */
/* 
let per=["Kumar","Karthi","Arjun"];
const a=per.map(m=>"Mr."+m);
console.log(a);
 */

/* let number=[1,2,5,12,15];
let found=number.filter(num=>num>10); 
let even=number.filter(num=>num%2==0);
console.log(found);
console.log(even);
 */
/* const students = [
    { name: "Nathiya", age: 20, course: "B.Tech" },
    { name: "Rahul", age: 22, course: "BCA" },
    { name: "Anitha", age: 19, course: "B.Sc" }
];
console.log(students);
const names = students.map(student => student.name);

console.log(names);
 */

/* const students = [
    { name: "Nathiya", mark:85 },
    { name: "Rahul", mark:70 },
    { name: "Anitha", mark:40 }
];
let names=students.filter(f=>f.mark>50).map(n=>n.name);
console.log(names);
 */
/* const person = {
  name: "Nathiya",
  age: 20,
  city: "Chennai"
};

for (const key in person) {
  console.log(key, ":", person[key]);
}

let fruit=["apple","mango","orange","pine"];
for(let f of fruit){
    console.log(f);
    
}
fruit.forEach(n=>{
    console.log("Hello "+n);
})
//reduce
let nums=[10,20,30,40,50];
let total=nums.reduce((sum,current) => sum + current,0);
console.log(total); // Outputs: 150

//concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]

const carr1 = [1, 2, 3];
const carr2 = [4, 5, 6];
const ccombined = [...carr1, ...carr2];
console.log(ccombined);

 */
