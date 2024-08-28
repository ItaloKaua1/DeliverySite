import HorarioFuncionamento from '../../components/HorarioFuncionamento/HorarioFuncionamento'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'

import './Home.css'

const items = ["Marmita", "Combos", "Sobremesas", "Bebidas"]

const Home = () => {
    return(
        <div className='containerDefault' id='divHome'>
            <Navbar />
            <HorarioFuncionamento />
            <SearchBar items={items}/>
        </div>
    )
}

export default Home