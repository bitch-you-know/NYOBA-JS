import { Card, CardBody, CardHeader,CardFooter,Button,Divider} from "@nextui-org/react";
const TodoCard = (props) => {
    // return(
    //     <div>
    //         <h5>Monday</h5>
    //         <ul>
    //             <li>Mandi</li>
    //             <li>Sarapan</li>
    //             <li>Coding</li>
    //         </ul>
    //     </div>
    // )




    // export default TodoCard

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="font-bold text-lg"> {props.day} ({props.numberOfActivity}) </CardHeader>
            <Divider/>
            <CardBody>
                <ul>
                    <li>Mandi</li>
                    <li>Sarapan</li>
                    <li>Coding</li>
                </ul>
            </CardBody>
            <CardFooter>
                    <Button id="btn">finish</Button>
            </CardFooter>
            

        </Card>
    )

}
export default TodoCard