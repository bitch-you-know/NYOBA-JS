// metode Array 

//================== salah satu contoh pemanggilan  1 index dalam aray
// const arraySaya =["pisang","jeruk","mangga","pir"]

// console.log(arraySaya[2])   kasih index yang mau di panggil

//===============================================================================

//METODE CARA MENGGISI ATAU MENAMBAHKAN ARRAY
//---------------------------------------------1
// const arraySaya = []
// arraySaya.push(["pisang","jeruk","mangga","pir"]
// )
// console.log(arraySaya)
//----------------------------------------------2
// const arraySaya=[]
// arraySaya[0]="pisang"
// arraySaya[1]="madu"
// arraySaya[2]="jantung"

// console.log(arraySaya)
//---------------------------------------------

//=====================================================================================

//METODE UNTUK MENYATAKAN ATAU MENCARI  ISI DALAM ARRAY

// const arraySaya=["pisang","jeruk","mangga","pir"]
// const mencariArray = arraySaya.includes("mangga")            //buat baru lalu   .includes
                                                             //  hasil yang keluar adalah true

// console.log(mencariArray)
//----------------------------------------------------

// UNTUK MENGETAHUI POSISI DARI ARRAY YANG KITA CARI  TULISKAN 


// const arraySaya=["pisang","jeruk","mangga","pir"]
// const mencariPosisi = arraySaya.indexOf("mangga")                //buat baru lalu  .indexOf
                                                                 //yang keluar adalah nomor dari posisi index nya
// console.log(mencariPosisi)
// -----------------------------------------------------

// const arraySaya=["pisang","jeruk","mangga","pir"]
// const buahMangga= arraySaya.includes("mangga")
 
// if(buahMangga){
// const posisiMangga = arraySaya.indexOf("mangga")
// const penyebutanHasil=arraySaya[posisiMangga]
// const posisiSebelum = posisiMangga-1
// const posisiSesudah = posisiMangga+1
// const before = arraySaya[posisiSebelum]
// const after = arraySaya[posisiSesudah]
// console.log(`${buahMangga} buah ${penyebutanHasil} ada dalam kelompok [[${arraySaya}]] `)
// console.log(`posisi sebelum ${penyebutanHasil} adalah  ${before} `)
// console.log(`posisi sesudah ${penyebutanHasil} adalah  ${after} `)


// }
//================================================================================================
//MEMUNCULKAN HASIL AWAL ARRAY DAN AKHIR
// const arraySaya=["pisang","jeruk","mangga","pir"]
// const buahAwal= arraySaya.shift()
// const buahAkhrir= arraySaya.pop()

// console.log(buahAkhrir)








