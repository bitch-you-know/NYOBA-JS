// const prosessor =(callBack) =>{
//     callBack();
  
// };

// const greeting=() => {
//      console.log("hello world")
// }

// const goodByer=() => {
//     console.log("good bye")
// }

// prosessor(greeting)
// prosessor(goodByer)
//=======================================================================
// const calculate = (x,y,calculate) => {
//     calculate(x,y);
// }
// const sum = (a,b) =>{
//     console.log(a+b)
// }
// calculate(3,5,sum)
//===================================================================================
// const calculate=(x,y,calculate) =>calculate(x,y);

// const sum =(a,b) =>  console.log(a+b);

// calculate(5,5,sum)


// const calculate =(x,y,callback)=>{
// return callback(x,y);

// }
// const sum =(a,b) => a+b ;
// console.log(calculate(5,5,sum))

const names =(x,callback) =>  
{   return callback(x)
};
const tipe = (text ="")  => text.toUpperCase();

console.log(names("naruto",tipe))

