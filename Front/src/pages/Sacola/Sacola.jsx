import Back from "../../components/Back/Back"
import Logo from "../../components/Logo/Logo"
import Navbar from "../../components/Navbar/Navbar"
import ResumoPerdido from "../../components/OrderResume/OrderResume"

const Sacola = () => {
    return(
        <div className="containerDefault">
            <Back id="Back"/>
            <Logo />
            <h1>Resumo do pedido:</h1>
            <ResumoPerdido />
            <Navbar />
        </div>
    )
}

export default Sacola