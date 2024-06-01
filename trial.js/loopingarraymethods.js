


const user = ["abi" , "ida" ,"junaedi","ikram","suep","jaja"]

//  for (let names=0;names< user.length ;names++){
//     const namaBaru = user[names]
//     if(namaBaru.length<5){
//         console.log("username under 5 characters: " +namaBaru)

//     }
//  }

//===========================================================================
//  user.forEach((userName,index) => {
//     if(userName.length < 5){
//         console.log("username under 5 character ya :"+userName)

//     }
    
//  })

user.forEach((userName,index,) => {
    
        console.log(`index:${index}| userName: ${userName}`)   // <<<<<<<<<<< .foreach

//     } )

//================================================================================
// const findeUsername = user.find((username) => username === "junaedi");

// console.log(findeUsername)

// const findeUsername = user.find((username) => username.length === 7);    <<<<<<<  .find           

// console.log(findeUsername)

//-------------------------------------------------------------------------------


// const filterdUsers = user.filter((username) => {
//     return username.length > 4
// })

// console.log(filterdUsers)
//========================================================

// const filterUsers = []

// for(let i=0;i<user.length;i++){                                 <<<<<<<<<<<<<<<< filter
//    const currentUsername =user[i]

//     if (currentUsername.length>4){ 
//         filterUsers.push(currentUsername)

//     }
// }

// console.log(filterUsers)

//-----------------------------------------------------------------------------------------------

// const mappedUsers = user.map((username)=>{
//     if(username.length>4){
//         return username                                           <<<<<<<<<<< .map
//     }
// })
// console.log(mappedUsers)

// const numbers = ["1","2","3","3","4"]

// const converternumber= numbers.map((value)=>{
//     return Number(value)
// }

// )

// console.log(converternumber)
function nameArray(value) {
    const nameIndx = 
    
value.forEach((newName)=>newName[0]);
    return nameIndx;
  }
 
console.log(nameArray(["budi","dayat","hamid","dodi","farhan"]));



