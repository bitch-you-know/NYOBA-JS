import React, { useContext } from "react"
import { SignUpContex } from "../context/SignUpContext"

// const Heading=()=>{
//  const signUpContex=useContext(SignUpContex)

//  return <h1>{signUpContex.title}</h1>
// }


class Heading extends React.Component{
    static contextType = SignUpContex
    render(){
        return <h1>{this.context.title}</h1>
    }
}


export default Heading