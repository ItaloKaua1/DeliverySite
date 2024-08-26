import HorarioFuncionamento from '../../components/HorarioFuncionamento/HorarioFuncionamento'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
    return(
        <div className='containerDefault' id='divHome'>
            <h1>PRIMEIRA TELA</h1>
            <Navbar />
            <HorarioFuncionamento />
        </div>
    )
}

export default Home