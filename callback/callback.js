// function syncOne(callBack){
//     setTimeout(()=>{
//         console.log("function ONE done");

//         callBack()
//     },3000)
// }

// function syncTwo(callBack){
//     setTimeout(()=>{
//         console.log("function TWO done");
//         callBack()
//     },1000)
// }

// function syncThree(){
//     setTimeout(()=>{
//         console.log("function THREE done");

//     },2000)
// }



// syncOne(()=>{
//     syncTwo(()=>{
//         syncThree()
//     });
// })



function find1(callBack) {
    setTimeout(() => {
        console.log("console log find1")
        callBack()
    }, 1000)
}
function find2(callBack) {
    setTimeout(() => {
        console.log("console log find2")
        callBack()
    }, 1000)
}
function find3() {
    setTimeout(() => {
        console.log("console log find3")
    
    }, 1000)
}
function find4(callBack) {
    setTimeout(() => {
        console.log("console log find4")
        callBack()
    }, 1000)
}

find4(() => {
    find2(() => {
        find1(() => {
            find3()
        })
    })
})