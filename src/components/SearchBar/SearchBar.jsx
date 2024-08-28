import React, { useState } from 'react';
import './SearchBar.css'; // Adicione seus estilos CSS aqui

const items = ["Marmita", "Combos", "Sobremesas", "Bebidas"];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      setFilteredItems(items.filter(item => item.toLowerCase().includes(term.toLowerCase())));
    } else {
      setFilteredItems(items);
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleChange} 
        placeholder="Pesquisar..." 
      />
      {searchTerm && (
        <div className="results">
          {filteredItems.length > 0 ? (
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
