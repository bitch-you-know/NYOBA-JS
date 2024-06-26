import { Button, Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react"
import { defaults } from "autoprefixer"
import { Controller, useForm } from "react-hook-form"
import { ZodBoolean, ZodString, boolean, string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'



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
                    
                    <Button type="submit" color="primary">Sign up</Button>

                </form>
                  
            </CardBody>
        </Card>
    </div>
)
}


export default SignUpPage 