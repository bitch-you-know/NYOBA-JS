import { Button, Input } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { axiosInstance } from "../lib/axsios"




function WishListPage() {

    const [wishListItem, setWishListItem] = useState([])
    const [WishListInput, setWishListInput] = useState("")

    const getWishList = async ()=>{
        const result = await axiosInstance.get("/wishlist-items")

       setWishListItem(result.data)
    }


    const addWishList = () => {
        setWishListItem([...wishListItem, WishListInput]);

        axiosInstance.post("/wishlist-items",{
            name:WishListInput
        })
        
    }

    useEffect(()=>{
        getWishList()
    })
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
                    return <li>{item.name}</li>
                })}
            </ul>
        </>
    )
}

export default WishListPage