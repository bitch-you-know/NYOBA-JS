import React from "react"

export const withAlert =(InerComponent)=>{
    class WrapperComponent extends React.Component{
     componentDidMount(){
        alert("DID MOUNT")
     }
      render (){
        return <InerComponent {...this.props}/>
      }
    }

    return WrapperComponent;
};
