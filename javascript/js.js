let a = 5;
if (a >= 5) { console.log(a) }
else console.log("Value is less than 5");
let b = 6;
if (b > 7) console.log("True");
else if (b > 5) console.log("Next true");
else if (b > 3) console.log("Ladder else if");
else console.log("else");
var name = "bal enq";
switch (name) {
    case "bal enq": console.log("Check balance");
        break;
    case "with": console.log("widthdraw amount");
        break;
    default: console.log("Enter a valid Input");
}
var arr = ["nani", 523, "pass"];
debugger;
for (let i = 0; i < arr.length; i++) {
    console.log(i, "nani");
    console.log(arr[i]);

}
// for(;;){
//     console.log("Infinite loop");
// }

console.clear();
console.count(arr);
console.warn("warn");
console.error("error");
console.dir();
console.dirxml();
console.log("%ccheck error background", 'background-color:yellow');
//normal function
function add(a, b) {
    return a + b;
}
let sum = add(3, 4);
console.log(sum);
//checking scope of a function
function add3(a, b, c) {
    var res = a + b;
    console.log(a, b, c);
    res = res + c;
    return res;
}
let ans = add3(1, 2, 3);
console.log(ans);
//console.log(res);
//arrow function
var add1 = (a, b) => {
    let result = a + b;
    return result;
}
let ans1 = add1(2, 3);
console.log(ans1);
//higher order function:function that takes input as a function
var fun1 = (fun2) => {
    let a = 10;
    return a + b;
}
var fun2 = (a, b) => {
    return a + b;
}
console.log(fun1(2, 3));
var students = [0, 45, 12, 7, 9];
console.log(students.sort((a, b) => a - b));
let res1 = students.find(function (x) { return x % 2 == 0; });
console.log(res1);
let ver = students.map((x) => x + 1200);
console.log(ver);
students.forEach((x) => {
    console.log(x);
});
console.log(students.reduce((a, b) => a + b / students.length));



let stu=(callback) => {
    let st=
    [
        {
            name: "naveen", id: 23,
            course: [
                { courseName: "cse", id: 1 },
                { courseName: "ece", id: 2 }
            ]
        },
        {
            name: "nani", id: 93,
            course: [
                { courseName: "ece", id: 2 },
                { courseName: "eee", id: 3 }
            ]
        }
    ];
    return callback(st);
};
stu((x)=>{
    console.log(x);
});

var add=(a,b)=>{
    return a+b;
}
var high=(fun)=>{
    return fun(1,2);
}
console.log(high(add));
//Immediate invoke function exoression :initially loads browser
(function add45(a,b) {
    console.log(a+b);
})(1, 100)

//closure and lexical scope
function hello(a){
    let sum=10;
    let re=sum+a;
    return function fin(inp){
        return re+9;
    }
}
var re=hello(2)
console.log(re(2));



