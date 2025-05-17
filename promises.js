// const arr = ["apple", "orange"];
// const myPromise = new Promise((resolve, reject) => {
//   if(arr.includes('apple') && arr.includes('banana')&& arr.includes('orange')) {
//   resolve("all fruits are present");
// }
//   else {
//     reject("some fruits are missing");
//   }
  
// })
// myPromise.then(
//   (res) => {
//    console.log(res);
// }).catch(
//   (err) => {
//   console.log(err)
//  })

function myPromise() {
  return new Promise((resolve, reject) => {
    number = Math.random();
    if (number % 2 == 0) {
  
      resolve(number * 5);
    }
    else {
      reject(`number is rejected ${number * 5}`);
    }
  })
}

myPromise().then((res) => {
  console.log(res);
  
})
.catch((err) => {
  console.log(err);
})