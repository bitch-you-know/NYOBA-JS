import { Button } from "@nextui-org/react";
import { useState } from "react";
import Heading from "./Heading";


const Header = () => {
const [messsage,setMessage] =useState("Hello World")


const changeMessage=()=>{
  setMessage("state Changed")
}

    return (

      <>
       <header style={{
            backgroundColor:"darkgrey",
            padding:"40px",
            fontFamily:"sans-serif",
            textAlign:"center"
       }}>
             <Heading />
             {/* <p>{messsage}</p>
             <Button onClick={changeMessage}>change message</Button> */}
       </header>
      </>

    )
}


export default Header;