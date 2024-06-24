import { Button, Input } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { axiosInstance } from "../lib/axios"



const WIshListPage =()=>{
 
    const [WishListItem,setWishListItem]=useState([])
    const [WishListInput,setWishListInput]=useState("")

    const getAxsios = async ()=>{
        const result = await axiosInstance.get("/WishList")
        setWishListItem(result.data)
    }



    const addWishList=async ()=>{
     await axiosInstance.post("/WishList",{
        name:WishListInput,
     })
     
    }

    useEffect(()=>{
        getAxsios()
    })


    return(
        <>
           <div className="flex justify-center"> 
                    <Input onChange={(event)=>{
                        setWishListInput(event.target.value)
                    }} label="WishList" color="secondary"/>
                    <Button onClick={addWishList} color="primary" className="mt-2">Add</Button>
           </div>
           <ul className="text-center">
            {WishListItem.map((item)=>{
               return <li>{item.name}</li>
            })}
           </ul>
        </>
    )
}

export default WIshListPage