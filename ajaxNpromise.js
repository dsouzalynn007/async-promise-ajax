// ! only AJAX
// let myAjax= new XMLHttpRequest()

// myAjax.open('GET','https://api.github.com/users')
// console.log(myAjax)

// myAjax.onload=function(){
//     console.log(myAjax)
//     if(myAjax.status>=200 && myAjax.status<300){
//         console.log(JSON.parse(myAjax.response));
//     }
// }
// myAjax.onerror=function(){
//     if(myAjax.status>=400 && myAjax.status<500){
//         console.log(JSON.parse(myAjax.response));
//     }
// }
// myAjax.send()

// ! AJAX and PROMISE combined
// let fetchApi=function(){
//     let data=new Promise(function(resolve,reject){
//         let myAjax=new XMLHttpRequest()
//         myAjax.open('GET','https://api.github.com/users')
//         myAjax.onload=function(){
//             resolve(myAjax.response)
//         }
//         myAjax.onerror=function(){
//             reject(myAjax.response)
//         }
//         myAjax.send()
//     })
//     data
//     .then(res=>console.log(JSON.parse(res)))
//     .catch(err=>console.log(err))
// }
// fetchApi()

// !------------PROMISE.ALL--MULTIPLE APIS----------------------

let githubApi=function(){
    return new Promise(function(resolve,reject){
        let myAjax=new XMLHttpRequest()
        myAjax.open('GET','https://api.github.com/users')
        myAjax.onload= function(){
            resolve(JSON.parse(myAjax.response))
        }
        myAjax.onerror=function(){
            reject(myAjax.responseText)
        }
        myAjax.send()
    })
}
let animeApi=function(){
    return new Promise(function(resolve,reject){
        let myAjax=new XMLHttpRequest()
        myAjax.open('GET','https://ghibliapi.herokuapp.com/people')
        myAjax.onload= function(){
            resolve(JSON.parse(myAjax.response))
        }
        myAjax.onerror=function(){
            reject(myAjax.responseText)
        }
        myAjax.send()
    })
}
let gotApi=function(){
    return new Promise(function(resolve,reject){
        let myAjax=new XMLHttpRequest()
        myAjax.open('GET','https://www.anapioficeandfire.com/api/characters')
        myAjax.onload= function(){
            resolve(JSON.parse(myAjax.response))
        }
        myAjax.onerror=function(){
            reject(myAjax.responseText)
        }
        myAjax.send()
    })
}
let newsApi=function(){
    return new Promise(function(resolve,reject){
        let myAjax=new XMLHttpRequest()
        myAjax.open('GET','https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5')
        myAjax.onload= function(){
            resolve(JSON.parse(myAjax.response))
        }
        myAjax.onerror=function(){
            reject(myAjax.responseText)
        }
        myAjax.send()
    })
}
Promise.allSettled([githubApi(),animeApi(),gotApi(),newsApi()])
// .then(data=>console.log(data))
// .then(data=>console.log(data[0].value[3].login))
.then(data=>console.log(data[0].value[0].login))
.catch(err=>console.log(err))

