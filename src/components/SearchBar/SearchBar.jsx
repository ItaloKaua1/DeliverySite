import React, { useState } from 'react';

const SearchBar = ({ items }) => {
const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de busca

  // Filtra os itens com base no termo de busca
const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
)

return (
        <div>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de busca
                style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar;
