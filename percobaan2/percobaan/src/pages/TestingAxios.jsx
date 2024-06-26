import { Button, Input } from "@nextui-org/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { axiosInstance } from "../lib/axsios"




function TestingAxios() {

    const [wishListItem, setWishListItem] = useState([])
    const [WishListInput, setWishListInput] = useState("")


   const fetchWishListItems= async ()=>{
        const respons=await axiosInstance.get("/wishlist-items")
        setWishListItem(respons.data)
        
}

    const addWishList =  async () => {
        await axiosInstance.post("/wishlist-items",{
            name:WishListInput
        })

        fetchWishListItems()
        setWishListInput("")
         
        
    }

 


    


      useEffect(()=>{
        fetchWishListItems()

      },[])

      

    return (
        <>
            <div className="flex justify-center">
                <Input onChange={(Event) => {
                    setWishListInput(Event.target.value)
                }} label="Wish List" color="secondary" />
                <Button onClick={addWishList} color="primary" className="mt-2">ADD</Button>
            </div>

            <ul className="text-center list-decimal list-inside">
                {wishListItem.map((item) => {
                    return (
                        <li key={item.id}>{item.name}</li>
                    ) 
                })}
            </ul>
        </>
    )
}

export default TestingAxios