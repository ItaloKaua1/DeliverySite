import HorarioFuncionamento from '../../components/HorarioFuncionamento/HorarioFuncionamento'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
    return(
        <div className='containerDefault' id='divHome'>
            <h1>PRIMEIRA TELA</h1>
            <Navbar />
            <HorarioFuncionamento />
            <h2>Marmita</h2>
            <h2>Combos</h2>
            <h2>Sobremesas</h2>
            <h2>Bebidas</h2>
            <h1>VAI TOMAR NO CU VITOR ROLA</h1>
        </div>
    )
}

export default Home