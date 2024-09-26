import React, { useState } from 'react';
import './SearchBar.css'; // Adicione seus estilos CSS aqui

const items = ["Marmita", "Combos", "Sobremesas", "Bebidas"];

function SearchBar({setSearchTerm}) {

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term) 
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                onChange={handleChange} 
                placeholder="Pesquisar..." 
            />
        </div>
    );
}

export default SearchBar;
