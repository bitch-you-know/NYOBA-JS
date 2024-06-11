// function asyncSum(a,b){
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          let hasil =0
//          hasil=a+b

//          resolve(hasil)
//         },3000)
//      })
// }




// async function hasil(){
//     try  {
//             const result =await asyncSum(5,2)
//             if(result<10){
//             throw error("ini di bawah 10")
//             }
//             console.log(result)
//     }catch (err) {
//         console.log(err)
//     }finally{
//         console.log("process is done...")
//     }

// }

// hasil()




// asyncSum(10).then((result)=>{
//   console.log(result)
// })
// .catch((result)=>{
//   console.log(result)
// })


function infoSaldo (user){
  return new Promise((resolve,reject)=>{
    if(user.saldo){
      resolve(user)
    }
    else{
        reject("Gagal mendapatkan info saldo")
    }
  })

}

async function getInfoPengguna(user){
       try {
        const hasil = await infoSaldo(user)
        console.log(`Nama ${hasil.name} memiliki sisa saldo ${hasil.saldo}`)
        
       } catch (err) {
        console.log(err)
       }
}

user = { name: "Park Doe", saldo: 3000000}
getInfoPengguna(user)






// getInfoPengguna(user);