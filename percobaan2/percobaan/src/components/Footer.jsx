import React from "react"
import "../style/Footer.css"
import { Button } from "@nextui-org/react"
import { withAlert } from "../hoc/withAlert"
import { withBackground } from "../hoc/withBackground"



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
       <p >{this.props.message}</p>
       <p data-testid="props-message">{this.state.message}</p>
       <p>{this.props.newprops}</p>
       <Button onClick={this.changeMessage}>Change Message</Button>
     </footer>
    )
  }
  }




export default  withBackground(Footer)