function creatKTP(age=0) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(age<17){
                reject("EROOR : age not old enough");
            } 
         
            else{
                resolve(" valid creating KTP...");
            }

        }, 3000);
    })

}


creatKTP(18).then((result)=>{
    console.log(result)
   
})
.catch((err)=>{

    console.log(err)
   
})
.finally(()=>{
    console.log("CHECKING PROCESS IS DONE...")
})
