import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import{withAlert} from '../hoc/withAlert'

const TodoList =(props)=>{
    return(
       
           <Card className="max-w-[400px]" >
            <CardHeader className="font-bold">
             <h1 >{props.day}</h1>     ({props.typeOfNmuber}) 
            </CardHeader>
            <Divider/>
            <CardBody >
                  <ul className="list-decimal list-nside m-3">
                    <li>Mandi</li>
                    <li>Makan</li>
                    <li>Coding</li>
                  </ul>
            </CardBody>
            <Button>add</Button>
            {props.propsTambahan}
           </Card>
       
    )
}

export default withAlert(TodoList)