import { useEffect } from "react";
import "../style/Header.css";
import Heading from "./headding";


const Header=()=>{
    //componentDitamount
    useEffect(()=>{
        alertUser()
    },[])
    //compoonentWillunmont
    useEffect(()=>{
        return()=>{
            alert("will Amount")
        }
    },[])

    const alertUser =()=>{
       alert("DID AMOUNT")
    }
return (
    <header style={{
        backgroundColor:"darkgrey",
        padding:"8px",
        fontFamily:"sans-serif",
        textAlign:"center"
    }}>
        <Heading>My Header</Heading>
    </header>
)
}
export default Header;