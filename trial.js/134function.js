// function sum (x,y){
//   return x+y
// }

// console.log(sum(3,3))

//=================================================
// function greetName (names,umur){

      
//   console.log(`hey, ${names},umur kamu sekarang ${umur}`)
// }

// greetName("andi",23)

//=================================================

// function sum (L,M) => {
//   return L+M 
//   console.log()
// }


// const fullName = function addName(firstName,lastName){
// console.log(firstName,lastName)
// }

// fullName("abi","ubi")
//=========================================================

const sum = new Function (
  'c',
  'y',
  'console.log(c+y)',
)

sum(3,5)