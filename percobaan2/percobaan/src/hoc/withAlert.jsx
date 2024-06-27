import React from "react"

export const withAlert =(InerComponent)=>{
    class WrapperComponent extends React.Component{
    componentDidMount(){
      alert("hallo")
    }
      render (){
        return <InerComponent {...this.props} newprops="waduh pak"/>
      }
    }

    return WrapperComponent;
};
