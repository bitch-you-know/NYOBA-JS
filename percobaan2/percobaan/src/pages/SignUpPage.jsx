import { Button, Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react"
import { defaults } from "autoprefixer"
import { Controller, useForm } from "react-hook-form"
import { ZodBoolean, ZodString, boolean, string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Header from "../components/Header"
import { SignUpContextConsumer, SignUpContextProvider } from "../context/SignUpContext"
import { Link } from "react-router-dom"



const signUpFormSchema= z.object({
    email: z.string().email(),
    username:z.string().min(4),
    password: z.string().min(8),
})


const SignUpPage =()=>{

    const form=useForm({
        defaultValues:{
            email:"",
            username:"",
            password:""
        },

        resolver:zodResolver(signUpFormSchema),
        
    })

    const registerUser =(data)=>{
        console.log(data)
    }


return (
    <SignUpContextProvider value={{
        title:"hello world"
    }}>
    <Header/>
    <SignUpContextConsumer>
        {
            (context)=>{
                return <p className="text-center font-semibold">{context.title}</p>
            }
        }
    </SignUpContextConsumer>
    <div className="flex h-screen items-center justify-center">
        <Card className="w-[300px]">
            <CardHeader className="font-semibold text-lg">sign up !</CardHeader>
            <Divider />
            <CardBody  >
                <form onSubmit={form.handleSubmit(registerUser)} className="flex flex-col gap-4">
                <Controller
                    name="email"
                    control={form.control}
                    render={({field,fieldState})=>{
                        return(
                            <Input {...field} type="email" label="email" size="sm" isInvalid={Boolean(fieldState.error)}  autocomplete="email"/>   
                        )
                    }}
                  />
                    <Controller
                    name="username"
                    control={form.control}
                    render={({field,fieldState})=>{
                        return(
                            <Input {...field} label="Username" size="sm" isInvalid={Boolean(fieldState.error)} autocomplete="username"/>
                        )
                    }}
                    /> 
                    <Controller
                    name="password"
                    control={form.control}
                    render={({field,fieldState})=>{
                        return(
                            
                    <Input {...field}  type="password" label="Password" size="sm" isInvalid={Boolean(fieldState.error)}  autocomplete="new-password"/>
                        )
                    }}
                    />    
                    
                    <Button type="submit" color="primary">Sign up</Button>|
                    <Link to={"/"}>To Count</Link>

                </form>
                  
            </CardBody>
        </Card>
    </div>
    </SignUpContextProvider>
)
}


export default SignUpPage 