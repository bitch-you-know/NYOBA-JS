// let w = 3.60
// let x = "12"
// let m =81
// let z = 4.58


// // let result = Math.floor(w) + Math.floor(z)+m+ Number(x)

// console.log(Math.floor(w)+Math.floor(z)+String(m)+x)
// const age = 22;
// const lulusUjian = false;

// if (age >= 17 && lulusUjian) {
//     console.log("Boleh bikin SIM");
// } else {
//     console.log("Tidak boleh");
//let
// let score = 60
//  if (score>=80){
//         console.log ("A")
//  }

//  else if (score >= 70){
//     console.log("B")
//  }
//  else if (score >= 50){
//     console.log("C")
//  }else if (score >= 40){
//     console.log("D")
//  }
//  else (
//     console.log("E")
//  )




// for  (let i = 0; i < 5; i++) {
//    console.log(i);
//    if (i%2) {
//        console.log("ini habis dibagi 2");
//       i++
//    }
// }

// const names = ["NARUTO","KAKASHI","SAKURA"]
// names[2]= "Bapak lu"

// console.log(names)

// for  (let i = 1; i < 31; i++) {
//    console.log(i);
//    if(i%2){
//       console.log("ini habis di bagi 2")
//       i++
//    }
//    if(i%5) {
//       console.log("ini habis di bagi 3.5")
//       i++
//    }

//       if(i%3 || i%5) {
//          console.log("ini habis di bagi 3.5")
//          i++
//       }


//    }
// if (i%6) {
//    console.log("ini habis dibagi 5");

//    i++
// }
// if (i%10) {
//    console.log("ini habis dibagi 10");

//    i++
// }
//  function camp(value) {
//     const campVar = value
//     const campInd = campVar[3]
//     console.log(campInd)
//   }

// camp(["Enigma", "Camp", "Code", "Node","Javascript"]);

//   let enigma = "Enigma BotCamp Keren"
//   let kata ="Mantap !"
// let stringMethode = "Awesome is "+enigma.slice(0,14)+" "+kata.toUpperCase()


//   console.log(stringMethode)

// const sum = (x,y) => x+y ;
// console.log(sum())
// const student = (value) => {
//   const studentVar = value
//   const arraySlice = studentVar.slice(1);
//   return studentVar
// }
// console.log(student(["budi","dayat","hamid","dodi","farhan"]));



// let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];

// let gpu = [4070, 4090, 4050, 4080, 4060];


// // lengkapi code disini 

// console.log(laptopGpu(laptop,gpu));



// Buatlah suatu function bernama laptopGpu yang menerima 2 parameter, dimana parameter itu berupa array bernama laptop dan  gpu.  sehingga ketika kode dijalankan akan mencetak output seperti berikut :
// [ '{acer dengan gpu 4050}', '{asus dengan gpu 4060}', '{axioo dengan gpu 4070}',  '{hp dengan gpu 4080}',  '{lenovo dengan gpu 4090}']



// let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];

// let gpu = [4070, 4090, 4050, 4080, 4060];

// function laptopGpu(valueLaptop,valueGpu){
//     valueLaptop.sort()
//     valueGpu.sort()
//    let result=[]
//     for(let i=0;i<valueLaptop.length && valueGpu.length;i++){
//       result.push(`{${valueLaptop[i]} dengan gpu ${valueGpu[i]}}`)    
//     }
//     return result
// }
// console.log(laptopGpu(laptop,gpu))

// let asd = ["abi","cindy","livi","hanny"]
// let numbers= [2,4,5345,656,76,,32] 

// let result =[]

// function jalal (inikeluar,inimasuk){
//   for (let i=0;i<inikeluar.length && inimasuk.length;i++){
//     result.push(`${inikeluar[0]}`)
//   }

//   return result

// }

// console.log(jalal(asd,numbers))
// const rumah = {
//     Panjang : 25,
//     Lebar: 10,
//     Alamat: "Jakarta",
//     Harga: 1_500_000_000,
//     Pajak:function(){return this.Harga*0.02}
// }
// console.log(rumah.Pajak())


// const rumah = {
//     Panjang: 25,
//     Lebar: 10,
//     Alamat: {
//         Provinsi: "DKI Jakarta",
//         Kota: "Jakarta Selatan",
//         Kecamatan: "Pasar Minggu"
//     },
//     Harga: 1_500_000_000,
//     Cicilan: 30_000_000,
//     DP: 200_000_000
// }
// rumah.Alamat.Kecamatan="Ciracas"
// delete rumah.Alamat.Kecamatan
// rumah.Alamat.Kota="Jakarta Timur"

// console.log(rumah.Alamat)



let beliMobil=function(gaji){
    if(gaji>=30000000){
        return {jamal:lali}
    }
}


beliMobil(30000000)