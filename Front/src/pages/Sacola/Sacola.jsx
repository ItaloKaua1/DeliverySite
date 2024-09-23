import Back from "../../components/Back/Back"
import Logo from "../../components/Logo/Logo"
import Navbar from "../../components/Navbar/Navbar"


const Sacola = () => {
    let async = fetch("http://localhost:3001/Pedidos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    return(
        <div className="containerDefault">
            <Back id="Back"/>
            <Logo />
            <h1>Resumo do pedido:</h1>
            
            <Navbar />
        </div>
    )
}

export default Sacola