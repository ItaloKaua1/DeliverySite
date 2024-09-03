import { useState } from "react"
import UserButtons from "../../components/UserButtons/UserButtons"
// import UserInputs from "../UserInputs/UserInputs"
import UserItems from "../../components/UserItems/UserItems"
// import Session from "../../services/Session"

import "./Perfil.css"
import ElipseUser from "../../components/ElipseUser/ElipseUser"
import Navbar from "../../components/Navbar/Navbar"

const Perfil = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const userName = Session.getInstance().user.name
    // const userEmail = Session.getInstance().user.email
    // const userPassword = Session.getInstance().user.password

    return (
        <div id="divUser">
            <ElipseUser />
            {/* <UserItems name={userName} email={userEmail} password={userPassword}/> */}
            {/* <UserInputs name={userName} email={userEmail} password={userPassword}/> */}
            <UserButtons nameButton="Salvar Alteralções" backTo="/home"/>
            
        </div>
    )
}

export default Perfil