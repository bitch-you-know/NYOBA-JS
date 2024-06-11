// const a = {
//     processor: "Ex 2100", Type: "S21 Ultra", Variant:
//         { RAM: 12, Internal: 256, RAM: 16, Internal: 512 }
// }
// const b = {
//     processor: "SD 8 GEN 1", Type: "S22 Ultra", Variant:
//         { RAM: 12, Internal: 256, RAM: 12, Internal: 512 }
// }
// const c = {
//     processor: "SD 8 GEN 2 for Galaxy", Type: "S23 Plus", Variant:
//         { RAM: 8, Internal: 256, RAM: 8, Internal: 512 }
// }
// const d = {
//     processor: "SD 8 GEN 2 for Galaxy", Type: "S23 Ultra", Variant:
//         { RAM: 12, Internal: 256, RAM: 12, Internal: 512 }
// }



// const handPhone =[a,b,c,d]

// const getProcessorWithRAM8 = handPhone.filter((filterDulu) => filterDulu.Variant.RAM == 8)

// console.log(getProcessorWithRAM8)




// const handPhone = [{
//     processor: "Ex 2100", Type: "S21 Ultra", Variant:
//         [{ RAM: 12, Internal: 256, }, { RAM: 16, Internal: 512 }], Tahun: 2021
// }, {
//     processor: "SD 8 Gen 1", Type: "S22 Ultra", Variant: [
//         { RAM: 12, Internal: 256, }, { RAM: 12, Internal: 512 }], Tahun: 2022
// }
//     ,{
//     processor: "SD 8 Gen 2 for Galaxy", Type: "S23 Plus", Variant: [
//         { RAM: 8, Internal: 256 }, { RAM: 8, Internal: 512 }], Tahun: 2023
// }
//     , {
//     processor: "SD 8 Gen 2 for Galaxy", Type: "S23 Ultra", Variant: [
//         { RAM: 12, Internal: 256 }, { RAM: 12, Internal: 512 }], Tahun: 2023
// }]

// const getProcessorWithRAM8=()=>{
//     let hasil =[]
//     handPhone.forEach((hp)=>{
//         hasil.push(hp)
//     }
    
//     )
//   return hasil
// }

// console.log(getProcessorWithRAM8())
// class CarFulll  {
//     merek=0
//     tahunPembayaranPajak=0
//     mesin=0
//     harga=0

//     constructor(inputMerek,inputTahunPembayaranPajak,inputMesin,inputHarga){
//        this.merek=inputMerek
//        this.tahunPembayaranPajak =inputTahunPembayaranPajak
//        this.mesin=inputMesin
//        this.harga=inputHarga
//     }
//     getPajak(){
            
//     }


// }


// class SuratKendaraan extends CarFulll{
//     getPajak(inputMerek,inputTahunPembayaranPajak,inputMesin,inputHarga){ 
//         super(inputMerek,inputTahunPembayaranPajak,inputMesin,inputHarga)
//     }

// }

// const carPajak =new SuratKendaraan(Toyota,2016,1500,300000000)


function changingAddress(){
    setTimeout(()=>{
        console.log("changing address");
    },1000);
}

async function addressCheck (){
    try{
    const resultChanging = await changingAddress();
        throw new Error(console.log("throw error"));

   
    console.log(resultChanging);
    }catch(error){
        console.log(error);
    }
}

addressCheck()