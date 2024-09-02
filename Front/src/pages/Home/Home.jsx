// Home.js
import HorarioFuncionamento from '../../components/HorarioFuncionamento/HorarioFuncionamento'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'
import Modal from '../../components/Modal/Modal'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'

import React, { useState } from 'react'
import './Home.css'

const Home = () => {
    const items = ["Marmita", "Combos", "Sobremesas", "Bebidas"]

    const [isModalOpen, setModalOpen] = useState(false) // Mover para dentro do componente

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    return (
        <div className='containerDefault' id='divHome'>
            <Logo className= 'logoHome'/>
            <HorarioFuncionamento onClick={handleOpenModal} />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            <Navbar />
            <SearchBar items={items}/>
            <Menu />
        </div>
    )
}

export default Home
