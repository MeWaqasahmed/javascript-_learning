// const array = [7, 6, 7, 8, 7, 6, 5, 7, 8];
// function target(array , number) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++){
//     if (number == array[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(target(array, 8));

// --------------Arrow function---------------

// var waq = "waqas";
// const func = () => {
//   // return waq;
//   console.log(waq);
// }
//  func();

// --------------------------default and rest parameter***********----------------
// if we pass different numbers as an actual parameter, rest (...) parameter stores it as an array
// function sum(...b) {
//   let sum0 = 0;
//   for (let i = 0; i < b.length; i++){
  //     sum0 = sum0 + b[i];
  //   }
  //   return sum0;
  // }
  // --------------------------parameter destructuring***********----------------9, 8, 7));
// const student= {
//   name: "waqas",
//   age : 89
// }
//   //  we can use direct oject values as a parameter in the function
// function fun({ name, age }) {
//   console.log(` may name is ${name} and my age is ${age}`)


// }
// fun(student);

// const fun = () => {
//   return 7;
// }
// console.log(fun());

const arr = [9, 77, 8, 9, 88, 6, 55, 6,];
LowToHigh =arr.sort((a, b) => {
  return a - b;
  
})
console.log(LowToHigh);
