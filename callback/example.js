function asyncSum(a,b,callBack){
setTimeout(()=>{
    let result=0;
    result=a+b;

    console.log("done sum")

 callBack(result)
},1000)

}

function asyncMultiplay(a,b,callBack){
setTimeout(()=>{
    let result=0
    result=a*b

    console.log("done Multiply")
    callBack(result)
},1000)

}

function displayResult(result){
   console.log("your result is " + result)
}

asyncSum(3,5,(sumResult)=>{
  asyncMultiplay(sumResult,2,(hasil)=>{
     displayResult(hasil)
  })
})


// function sum (a,b){
//   let result = 0
//   result=a+b

//  return result
// }

// console.log(sum(5,5))

