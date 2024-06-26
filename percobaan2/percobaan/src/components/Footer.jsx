import React from "react"
import "../style/Footer.css"
import { Button } from "@nextui-org/react"
import { withAlert } from "../hoc/withAlert"



class Footer extends React.Component{
  state={
    message:"hello World State"
  }
  alertUser=()=>{
    alert("DID MOUNT")
  }

  changeMessage=()=>{
    this.setState({message:"State Changed"});
  }
  
  render(){
    return(
     <footer className="pt">
       <h1>Hello Dunia</h1>
       <p>{this.props.message}</p>
       <p>{this.state.message}</p>
       <Button onClick={this.changeMessage}>Change Message</Button>
     </footer>
    )
  }
  }




export default  withAlert(Footer)