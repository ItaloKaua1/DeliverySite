import React, { useEffect, useState } from 'react';
import Back from "../../components/Back/Back";
import Navbar from "../../components/Navbar/Navbar";
import './Pedidos.css'; // Importando o CSS do componente

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const response = await fetch('http://localhost:3001/pedidos');
                const data = await response.json();
                setPedidos(data);
            } catch (error) {
                console.error("Erro ao buscar pedidos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPedidos();
    }, []);

    return (
        <div className="containerDefaultPedidos">
            <Back />
            <h1>PEDIDOS</h1>
            {loading ? (
                <p>Carregando pedidos...</p>
            ) : (
                <div className="pedidos-lista">
                    {pedidos.length === 0 ? (
                        <p>Nenhum pedido encontrado.</p>
                    ) : (
                        pedidos.map(pedido => (
                            <div key={pedido.id} className="pedido-card">
                                <h2>Pedido #{pedido.id}</h2>
                                {/* Exiba as informações do pedido aqui */}
                                <p><strong>Carnes:</strong> {pedido.carnes || "Nenhuma"}</p>
                                <p><strong>Guarnições:</strong> {pedido.guarnicoes || "Nenhuma"}</p>
                                <p><strong>Saladas:</strong> {pedido.saladas || "Nenhuma"}</p>
                                <p><strong>Quantidade:</strong> {pedido.quantidade || 1}</p>
                                <p><strong>Opção de Entrega:</strong> {pedido.opcaoEntrega || "N/A"}</p>
                            </div>
                        ))
                    )}
                </div>
            )}
            <Navbar />
        </div>
    );
}

export default Pedidos;