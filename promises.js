// //? START

// let myPromise= new Promise(function(resolve,reject){
//     let myCondition=true
//     // let myCondition=false
//     if(myCondition){
//         resolve('fullfilled')
//     }
//     else{
//         reject('rejected')
//     }
// })
// console.log(myPromise);
// //!promise (NORMAL)
// myPromise.then(function(val){
//     console.log(val);
// })
// myPromise.catch(function(err){
//     console.log(err);
// })
// myPromise.finally(function(any){
//     console.log(any);
// })
// //!promise (CHAIN)
// myPromise
// .then(function(val){
//     console.log(val);
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(function(any){
//     console.log(any);
// })
// //!promise (CHAIN+ARROW)
// myPromise
// .then(val=>console.log(val))
// .catch(err=>console.log(err))
// .finally(any=>console.log(any))

// //? END

// //! PROMISE STATIC METHODS
// //! promise all method
// let myHtml=new Promise((resolve,reject)=>{
//     resolve('html success')
//     // reject('html failure')
// })
// let myCss=new Promise((resolve,reject)=>{
//     resolve('css success')
//     // reject('css failure')
// })
// let myJs=new Promise((resolve,reject)=>{
//     resolve('js success')
//     // reject('js failure')
// })
// Promise.all([myHtml,myCss,myJs]).then(val=> console.log(val))
// Promise.all([myHtml,myCss,myJs]).then(val=> val.forEach(ele => console.log(ele)))
// Promise.all([myHtml,myCss,myJs]).catch(err=> console.log(err))

// //! promise any method
// let myHtml=new Promise((resolve,reject)=>{
//     // resolve('html success')
//     reject('html failure')
// })
// let myCss=new Promise((resolve,reject)=>{
//     resolve('css success')
//     // reject('css failure')
// })
// let myJs=new Promise((resolve,reject)=>{
//     resolve('js success')
//     // reject('js failure')
// })
// Promise.any([myHtml,myCss,myJs]).then(val=> console.log(val))
// Promise.any([myHtml,myCss,myJs]).catch(err=> console.log(err))

// //! promise allSettled method
// let myHtml=new Promise((resolve,reject)=>{
//     resolve('html success')
//     // reject('html failure')
// })
// let myCss=new Promise((resolve,reject)=>{
//     // resolve('css success')
//     reject('css failure')
// })
// let myJs=new Promise((resolve,reject)=>{
//     resolve('js success')
//     // reject('js failure')
// })
// Promise.allSettled([myHtml,myCss,myJs]).then(val=> console.log(val))
// Promise.allSettled([myHtml,myCss,myJs]).then(val=> val.forEach(ele => console.log(ele)))
// Promise.allSettled([myHtml,myCss,myJs]).catch(err=> console.log(err))