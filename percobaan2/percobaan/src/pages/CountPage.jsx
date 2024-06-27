import { Button } from "@nextui-org/react"
import { useState } from "react"

const CountPage =()=>{

 const[counter,setcounter]=useState(0)


const addCount=()=>{
    setcounter(counter+1)
}
const subtracCount=()=>{
    setcounter(counter-1)
}

    return(
        <div className="flex justify-around min-h-96">
            <Button onClick={subtracCount}color="danger">SUBRACT</Button>
            <span>{counter}</span>
            <Button onClick={addCount} color="primary">ADD</Button>
        </div>
    )
}

export default CountPage