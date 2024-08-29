import HorarioFuncionamento from '../../components/HorarioFuncionamento/HorarioFuncionamento'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'

import './Home.css'

const items = ["Marmita", "Combos", "Sobremesas", "Bebidas"]

const Home = () => {
    return(
        <div className='containerDefault' id='divHome'>
            <Logo />
            {/* <Navbar /> */}
            <HorarioFuncionamento />
            <SearchBar items={items}/>
            <Menu />
        </div>
    )
}

export default Home