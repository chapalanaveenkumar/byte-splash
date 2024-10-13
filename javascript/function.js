//functions 
// normal function
function functionname(parameters){
    //statementss
    //return 
}
function functionwithoutparameters(){
    //return 
}
function greet(name){
    return `Hello ${name}!`;
}
console.log(greet("Naven"));
//function expression
const gret=function(name){
    return `Hello ${name}!`;
}
console.log(gret("Kumar"));

//Arrow functions
const add=(a,b)=>a+b;
console.log(add(9,8));
//arrow function with multope parameters
const add1=(a,b)=>a+b;
console.log(add1(9,8));
//Arrow function with a single parameter
const square=x=>x*x;
console.log(square(4));
//Arrow function with no parameter
const greetuser=()=>'Hello navin';
console.log(greetuser());
//arrow functions having mu;tiple lines of statements
const arrowfun=(a,b)=>{
    if(a>b) return a-b;
    else return a+b;
}
console.log(arrowfun(2,5));
//arrow fun without a name can be done only inside a function while returning the values


//Higher order function :function that takes inpput as an  function or returns a function
 const maparray=(arr,func)=>{
    return arr.map(func);
}
console.log(maparray([1,2,3],x=> x*2));

// arr.forEach(i => {
//     console.log(maparray([1,2,3],x=> x*3));
// });

const createcounter=()=>{
    let count=0;
    return ()=>++count;
}
const counter=createcounter();
console.log(counter());

//call back function
const fetchdata=(callback)=>{
    data={name:"nani",id:23};
    callback(data);//function call
}
fetchdata((data)=>{//function defenition
    console.log(data);
});

const fetchData=(callbck)=>{
    data={name:'naveen',id:23};
    callbck(data);
}
fetchData((data)=>{
    console.log(JSON.stringify(data));
});

//immedietely invoked function :to call the browser
(x=>{
    console.log("navei");
})();

//closure function
function outerFunction(){
    let outerVar="i am outside";
    return function innerfunction(){
        console.log(outerVar);
    }
}
const fun=outerFunction();
fun();

//rest and spread operator
(sum=(...numbers)=>{
    return numbers.reduce((a,b)=>a+b);
}
)(console.log(sum(1,2,3,4)));


//spread
const arr1=[1,2,3];
const arr2=[2,3,4];
const combined=[...arr1,...arr2];
console.log(combined);

const obj1={a:1,b:2};
const obj2={c:3};
const combined1={...obj1,...obj2};
console.log(combined1);
let deep=structuredClone(obj2);
deep={
c:7
};
console.log(deep);
console.log(obj2);
let shallow=obj1;
console.log(shallow);
shallow={a:9};
console.log(obj1);

const name="nani";
//objects creation 
const obj={
    name:"navin",
    id:23,
    greet(){
        console.log(`Hello my name is ${name} ans my id is ${this.id}`);
    }
};
console.log(obj.name);
obj.greet();

//constructer function
function Person(name,age,roll){
    this.name=name;
    this.age=age;
    this.roll=roll;
    this.greet=function(){
        console.log(`Hello my name is ${this.name}`);
    };
}
const bob=new Person("bob",25,23);
console.log(bob.name);

//objects creation
const animal={
    eats:true,
    walks(){
        console.log("animals walks");
    }
};
const rabbit=Object.create(animal);
rabbit.jumps=function(){
    console.log("rabbit jumps");
};
rabbit.hasWings=false;
rabbit.jumps();

const user={id:1,naame:"nani",age:20};
const {naame,age}=user;
console.log(naame);
console.log(Object.values(rabbit));
