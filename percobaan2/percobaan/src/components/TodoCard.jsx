import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react"
import { withAlert } from "../hoc/withAlert"

const TodoCard =(props)=>{
    return(
        <div className="flex h-[280px] justify-center ">
            <Card className="w-[500px]">
            <CardHeader className="font-bold text-lg">
                {props.day} ({props.numberOfActivities})
            </CardHeader>
            <Divider/>
            <CardBody>
                <ul className="list-decimal list-inside">
                    <li>mandi</li>
                    <li>sarapan</li>
                    <li>coding</li>
                </ul>
            </CardBody>
            <Divider/>
            <CardFooter>
                <Button>finish</Button>
            </CardFooter>
        </Card>
        </div>
    )
}

export default TodoCard