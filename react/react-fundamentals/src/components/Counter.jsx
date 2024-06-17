import { Button } from "@nextui-org/react";
import React, { useState } from "react";

// const Counter = () => {
//     const [count, setCount] = useState(0);


//     const IncrementCounter = () => {
//         setCount(count + 1)

//         if (count == 5) {
//             alert("stop bro")
//         }
//     }
//     const DecrementCounter = () => {
//         setCount(count - 1)
//     }

//     return (

//         <div>
//             <div className="flex items-center justify-around min-h-96">
//                 <Button onClick={DecrementCounter} color="danger">Subtrac</Button>
//                 <span className="text-3x1 font-semibold">{count}</span>
//                 <Button onClick={IncrementCounter} color="primary">add</Button>
//             </div>
//         </div>
//     )
// }


// export default Counter

class Counter extends React.Component{
    //state peertama
    state={
        //adalah inisialisasinya
        count:0,
    }

    incrementCounter=()=>{
        this.setState({count:this.state.count + 1})
    }
    decrementCounter=()=>{
        this.setState({count:this.state.count - 1})
    }

    render() {
        return(

            <div>
             <div className="flex items-center justify-around min-h-96">
                 <Button onClick={this.decrementCounter} color="danger">Subtrac</Button>
                <span className="text-3x1 font-semibold">{this.state.count}</span>
                 <Button onClick={this.incrementCounter}  color="primary">add</Button>
             </div>
         </div>
        )
    }

}

export default Counter


