import { Button, Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react"
import {Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const SignPageFromSchema = z.object({
    email: z.string().email(),
    username: z.string().min(4),
    password: z.string().min(8)
})

const SignPage=()=>{


   const form=useForm({
      defaultValues:{
        email:"",
        username:"",
        password:""
      },

      resolver : zodResolver(SignPageFromSchema),
   })

   const regisUser=(data)=>{
     console.log(`${data.email}   ${data.username}`)
   }


    return(
        <div className="flex justify-center items-center  h-screen">
             <Card className="w-[300px] ">
              <CardHeader className="font-semibold text-lg">SignUp</CardHeader>
              <Divider/>
              <CardBody className="flex flex-col gap-4">
                <form onSubmit={form.handleSubmit(regisUser)} className="flex flex-col gap-4">
                <Controller 
                  name="email"
                  control={form.control}
                  render={({field,fieldState})=>{
                return(
                    <Input {...field}  label="email" isInvalid={Boolean(fieldState.error)}/>
                )
                  }}
                />
                <Controller
                name="username"
                control={form.control}
                render={({field,fieldState})=>{
                    return(
                        <Input {...field} label="username" isInvalid={Boolean(fieldState.error)}/>
                    )
                }}
                />
                 <Controller
                 name="password"
                 control={form.control}
                 render={({field,fieldState})=>{
                    return (
                        <Input {...field} label="password" isInvalid={Boolean(fieldState.error)}/>
                    )
                 }}
                 />  
                   
                   <Button type="submit" color="primary">SIGIN UP!</Button>
                </form>
              </CardBody>
           </Card>
        </div>
    )
}
export default SignPage