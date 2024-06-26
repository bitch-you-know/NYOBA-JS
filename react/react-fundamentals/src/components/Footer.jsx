import React from "react"
import "../style/Footer.css"
import { Button } from "@nextui-org/react"


class Footer extends React.Component {
    state = {
        message: "hello word"
    }
    //menampilkan atau mount componentDidMount
    componentDidMount() {
        this.alertUser()
    }

    //ketika di update  gunakan componentDidUpdate
    componentDidUpdate() {
        alert("DIT UPDATE")
    }
   //ketika page berpindah atau selesai componentWillUnmount
    componentWillUnmount(){
        alert("good bye")
    }

    alertUser = () => {
        alert("dit mount")
    }

    changeMassage = () => {
        this.setState({ massage: "state Change 2" })
    }

    render() {
        return (
            <footer className="footer-h1">

                <h3 >My Footer</h3>
                <p>{this.props.massage}</p>
                <p>{this.state.message}</p>
                <Button onClick={this.changeMassage}>changeMassage</Button>



            </footer>
        )
    }
}

export default Footer