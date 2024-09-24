import "./UserInputs.css";

function UserInputs(props) {
    return (
        <div id="divUserI">
            <label id="nameU"><strong>Nome</strong></label>
            <input id="nameUser" value={props.name} readOnly />

            <label id="emailU"><strong>E-mail</strong></label>
            <input type="email" id="emailUser" value={props.email} readOnly />

            <label id="passwordU"><strong>Senha</strong></label>
            <input type="password" id="passwordUser" value={props.password} readOnly />
        </div>
    );
}

export default UserInputs;
