import { useState } from "react"
import "./UserButtons.css"
import { Link } from "react-router-dom"
import DeleteAccount from "../DeleteAccount/DeleteAccount"

function UserButtons(props){
    const [deleteAccount, setDeleteAccount] = useState(false);

    return (
        <div id="divUserButtons">
        <button id="deleteButton" onClick={() => setDeleteAccount(true)}>
            Excluir Conta
        </button>
        <Link to={props.backTo} className="Link">
            <button id="createButtonU">{props.nameButton}</button>
        </Link>
        <Link to="/home" id="linkToCancel" className="Link">
            <label id="cancelButtonU">Descartar alterações</label>
        </Link>
        {deleteAccount ? <DeleteAccount deleteAccount={setDeleteAccount} /> : null}
        </div>
    );
}

export default UserButtons