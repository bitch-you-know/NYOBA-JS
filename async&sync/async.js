function asyncOne(){
    setTimeout(()=>{
        console.log("function ONE is done")
    },3000)
}

function asyncTwo(){
    setTimeout(()=>{
        console.log("function Two is done")
    },2000)
}

function asyncThree(){
    console.log("function three is done")
}



asyncOne()
asyncTwo()
asyncThree()