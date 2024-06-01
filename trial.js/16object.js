

// const users = ["theo", "seto", "doraemon"]
//============================================================     LIAT CONSOLOG NYA
//   CARA PENULISAN DAN CARA PEMANGGILAN   DATA BERTIPE OBJECT
// const user = {
//     username: "naruto",                            //JENIS PEMANGGILAN OBJECT BIASA DOT NOTICTION 
//     age: 20, 
//     birthYear: 2000              
// };
// console.log(user.birthYear)              <<<< PAKE TITIK UNTUK MEMANGGIL PROPERTY NYA


//HARUS MENGGUNAKAN PERATURAN PENAMAAN YANG BENAR JIKA MENGGUNAKAN DOTH NOTICTION


//-------------------------------------------------------------

// const user = {                                 // Q  SAMA DENGAN PROPERTY >> Q VALUE ADALAH VALUE DARI PROPERTYNYA
//     username: "naruto",
//     age: 20,                                
//     birthYear: 2000                                  //JENIS PEMANGGILAN BRAKCKET NOTICTION                                             
// };                                          
// console.log(user["bthYear"])


//BISA MENGGUNAKAN MENYIMPANG PERATURAN PENAMAAN YANG BENAR ,JIKA MENGGUNAKAN  BRACKET NOTICTION


// const user = {                                
//     username: "naruto",
//     age: 20,                                
//     "birth-year":2000,                  //<<<<<< penulisan ini hanya bisa di BRACKET                                                 
// };                                          
// console.log(user["birth-year"])

//======================================================================================================

//                                                CARA mengganti isi dari object ISINYA

// const user = {
//     username: "naruto",
//     age: 20,
//     "birth-year": 2000,
// };


// user.age = 25;             //   <<<<<<<<<< yang ini   -----------

// console.log(user)

//=======================================================================

//  CARA MEMASUKAN OBJECT KE DALAM OBJECT

// const user = {
//     username: "naruto",
//     age: 20,
//     addres: {
//         province:"banten",
//         city:"tangerang",
//         postcode:15000,
//         street:{
//               number:"21 A.G",
//             streetName:"jalan kenangan"
//         }



//     },
//     nickName:["to","kaka","pakhokage"] 
// };

// console.log(user.nickName[2])                     //CARA PANGGIL nya kasih aja . DOte nya

//=========================================================================================================

// MEMASUKAN FUNCTION KE DALAM OBJECT


// const user = {
//     username: "naruto",
//     age: 20,
//     addres: {
//         province:"banten",
//         city:"tangerang",
//         postcode:15000,
//         street:{
//               number:"21 A.G",
//             streetName:"jalan kenangan"
//         }



//     },
//     nickName:["to","kaka","pakhokage"] ,       //MENGGUNAKAN ARROW FUNCTION
//     greeting:()=>{
//         return "hello";
//     }

// };

// console.log(user.greeting())  
//===========================================================================================================


// const user = {
//     username: "doraemon",
//     age: 20,
//     addres: {
//         province:"banten",
//         city:"tangerang",
//         postcode:15000,
//         street:{
//               number:"21 A.G",
//             streetName:"jalan kenangan"
//         }



//     },
//     nickName:["to","kaka","pakhokage"] ,
//     greeting:()=>{
//         return "hello";
//     },
//     introduction :function (){
//         return this.username      //<<<<<<<<<<<<<<<<<<<            //THIS ADALAH METH UNTUK OBJEK SAAT INI
//     }

// };

// console.log(user.introduction())  



const user = {
    username: "doraemon",
    age: 20,
    addres: {
        province: "banten",
        city: "tangerang",
        postcode: 15000,
        street: {
            number: "21 A.G",
            streetName: "jalan kenangan"
        }



    },
    nickName: ["to", "kaka", "pakhokage"],
    greeting: () => {
        return "hello";
    },
    introduction: function () {
        return `hello,my name is ${this.username}`      //<<<<<<<<<<<<<<<            //THIS ADALAH METH UNTUK OBJEK SAAT INI
    },


};

delete

    console.log(user.greeting())


// GUNAKAN DI CONSOLE.LOG(OBJECT.KEYS(USER))          UNTUK MENAMPILKAN Q NYAA  >>USERNAME AGE DLL
// GUNAKAN DI CONSOLE.LOG(OBJECT.VALUE(USER))         UNTUK MENAMPILKAN VALUENYA >> DORAEMON BANTEN TANGERANG
//GUNAKAN DI CONSOLE.LOG(OBJECT.FREEZ(USER))


