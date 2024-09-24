import "./UserInputs.css";
import React, { useState } from "react";

function UserInputs(props) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div id="divUserI">
            <label id="nameU"><strong>Nome</strong></label>
            <input id="nameUser" placeholder="nome" />

            <label id="emailU"><strong>E-mail</strong></label>
            <input type="email" id="emailUser" placeholder="exemplo@email.com" />

            <label id="passwordU"><strong>Senha</strong></label>
            <div className="password-container">
                <input
                    type={passwordVisible ? "text" : "password"}
                    id="passwordUser"
                    placeholder="●●●●●●●●"
                />
                <img
                    src={passwordVisible ? "/olho_aberto.png" : "/visibility_off.png"}
                    alt="Toggle visibility"
                    className="toggle-password-icon"
                    onClick={togglePasswordVisibility}
                />
            </div>

        </div>
    );
}

export default UserInputs;
