import { useState } from "react"
import UserButtons from "../../components/UserButtons/UserButtons"
// import UserInputs from "../UserInputs/UserInputs"
import UserItems from "../../components/UserItems/UserItems"

import "./Perfil.css"
import ElipseUser from "../../components/ElipseUser/ElipseUser"
import Navbar from "../../components/Navbar/Navbar"
import UserInputs from "../../components/UserInputs/UserInputs"

const Perfil = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const userName = Session.getInstance().user.name
    // const userEmail = Session.getInstance().user.email
    // const userPassword = Session.getInstance().user.password

    return (
        <div className="containerDefault" id="perfilContainer">
            <ElipseUser />
            {/* <UserItems name={userName} email={userEmail} password={userPassword}/> */}
            <UserInputs /> 

            <label id="profileLB"><strong>Perfil</strong></label>
            <label id="accLB"><strong>Conta</strong></label>
            <hr id="hr1"></hr>
            <hr id="hr2"></hr>
            <hr id="hr3"></hr>
            <hr id="hr4"></hr>
            <label id="deleteACC"><strong>Exclusão de conta</strong></label>
            <hr id="hr5"></hr>

            <UserButtons nameButton="Salvar Alteralções" backTo="/home"/>
            <Navbar />
        </div>
    )
}

export default Perfil