import React from "react";

export const SignUpContex=React.createContext({
    title:"",
})

export const SignUpContextProvider = SignUpContex.Provider;
export const SignUpContextConsumer = SignUpContex.Consumer