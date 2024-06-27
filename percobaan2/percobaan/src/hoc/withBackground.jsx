import React from "react";

export const withBackground =(InerComponent)=>{
   class WrapperComponent extends React.Component{

    render(){
        return <div className="bg-teal-500 p-4">
            <InerComponent {...this.props} newprops="hahaha"/>
        </div>
    }
   }
   return WrapperComponent
}