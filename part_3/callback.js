// function greet(callback) {
//   console.log("hello i am a coder");
//   callback();
// }
// function abuse() {
//   console.log("fuck you");
// }
// greet(abuse);

function calculate(a, b, callback) {
  console.log("the sum is " + callback(a,b));     
  
}
function add(x,y) {
  return x+y;
}
calculate(6,7,add)