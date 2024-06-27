import { Button } from "@nextui-org/react"
import { useState } from "react"
import { useSelector } from 'react-redux'

const CountPage = () => {
    const selector = useSelector((store) => store.counter )

    const [counter, setcounter] = useState(0)




    const addCount = () => {
        setcounter(counter + 1)
    }
    const subtracCount = () => {
        setcounter(counter - 1)
    }

    return (
    <div>
            <div className="flex justify-around min-h-96">
            <Button onClick={subtracCount} color="danger">SUBRACT</Button>
            <span>{counter}</span>
            <Button onClick={addCount} color="primary">ADD</Button>
          
        </div>
        <p className="text-center font-semibold">GLOBAL COUNT: {selector.count}</p>
    </div>
    )
}

export default CountPage