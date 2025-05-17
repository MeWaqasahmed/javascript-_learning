// function outer() {
//   let A = 9;
//   b = 6;

//   return function inner() {
//     console.log(A)
//     let b = 10;
//   }
  
//     // {
//     //   console.log(b);
//     // }
//   inner();
// }
// const check = outer();
// check();

// ------------------------shadowing

// var prefix = ">";
 
//   function log(logLevel, msg) {
 
//  let prefix = ":::";
//  console.log(`${window.prefix} ${logLevel} : ${msg}`);
// }
// log("debug", "error caught"); // ::: debug : error caught

// ------------------------hoisting
// result = 5 ;
// console.log(result); //

// function print(obj) {
 
//  console.log(obj;
//   }
 
//  // error
// console.log("hello world");
