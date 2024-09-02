import { useEffect, useState } from "react";
import "./LoginButton.css";
import { useNavigate } from "react-router-dom";

function LoginButton(props) {
    const [isAccepted, setAccepted] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        redirect();
    }, [isAccepted]);

    const redirect = () => {
        if (!isAccepted) return;
        navigate("/home", { replace: true });
    };

    const onClickLoginButton = async () => {
        try {
        const res = await props.login();
        setAccepted(res);
        } catch (err) {
        setError(err.message);
        }
    };

    return (
        <>
        <button id="loginButton" onClick={onClickLoginButton}>
            Fazer Login
        </button>

        {error === "" ? null : <div id="loginError">{error}</div>}
        </>
    );
}

export default LoginButton;
