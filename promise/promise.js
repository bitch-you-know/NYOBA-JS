// function asyncOne() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             //console.log("function ONE done");
//             resolve("function ONE is DONE")

//         }, 3000)
//     })

// }

// function asyncTwo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("function TWO done");

//         }, 1000)
//     })
// }

// function asyncThree() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("function THREE done");

//         }, 2000)
//     })
// }

// asyncOne().then((result) => {
//     console.log(result);
//     return asyncTwo()

// })
//     .then((result2) => {
//         console.log(result2)
//         return asyncThree();
//     })
//     .then((result3) => {
//         console.log(result3)
//     })


// asyncTwo().then((result)=>{
//     console.log(result)
// })



function hitungTotal(produk) {
    return new Promise((resolve, reject) => {
        let totalHarga = 0
        for (let i = 0; i < produk.length; i++) {
            let items = produk[i]
            if(items.nama && items.harga && items.jumlah){
              totalHarga += items.harga * items.jumlah
            }
            else{
                reject(`Data Produk tidak valid`)
            }
            

        }
        resolve(totalHarga)

    })
}
function hitungTotal(produk) {
    return new Promise((resolve, reject) => {
        let totalHarga = 0;

        for (let i = 0; i < produk.length; i++) {
            let items = produk[i];
            // Pengecekan apakah setiap data produk memiliki ketiga propertinya
          if (!items.nama || !items.harga || !items.jumlah) {
                reject("Data Produk tidak valid");
                return
               // Menghentikan eksekusi jika data produk tidak valid
            }  
            // Mengakumulasi total harga dari setiap produk
            totalHarga += items.harga * items.jumlah;
        }

        // Mengembalikan total harga setelah semua produk dihitung
        resolve(totalHarga);
    });
}





const produk = [
    { nama: "buah", harga: 2000, jumlah: 1 },
    { nama: "piring", harga: 2000, jumlah: 2 },
    { nama: "rokok", harga: 2000, jumlah:1 }
]

hitungTotal(produk).then((result)=>{
    console.log(result)
}).catch((err)=>{
  console.log(err)
})