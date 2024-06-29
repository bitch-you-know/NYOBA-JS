import { Button, Divider } from "@nextui-org/react"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Footer from "../components/Footer"


const slowDobleNumber=(num)=>{
    for(let i =0;i < 100000000000000;i++){
      return num * 2
    }
}

const CountPage = () => {
    const selector = useSelector((store) => store.counter)
    const dispatch = useDispatch()

    const [counter, setcounter] = useState(0)




    const addCount = () => {
        setcounter(counter + 1)
    }
    const subtracCount = () => {
        setcounter(counter - 1)
    }

    const incrementCount = () => {
        dispatch({
            type: "INCREMENT"
        })
    }
    const decrementCount = () => {
         dispatch({
            type: "DECREMENT"
         })
    }


const dobleNumberResult = slowDobleNumber(counter)


    return (
        <div >
            <p className="text-center font-semibold">LOCAL STATE</p>
            <div className="flex justify-around min-h-56">
                <Button onClick={subtracCount} color="danger">SUBRACT</Button>
                <span>{counter}</span>
                <Button onClick={addCount} color="primary">ADD</Button>
             
            </div>
            <h1 className="text-center font-semibold">{dobleNumberResult}</h1>
            <Divider/>
            <p className="text-center font-semibold">GLOBAL COUNT: {selector.count}</p>
            <div className="flex justify-around min-h-56">
                <Button onClick={decrementCount} color="danger">SUBRACT</Button>
                <span>{selector.count}</span>
                <Button onClick={incrementCount} color="primary">ADD</Button>
            </div>
            <Footer/>
        </div>
    )
}

export default CountPage