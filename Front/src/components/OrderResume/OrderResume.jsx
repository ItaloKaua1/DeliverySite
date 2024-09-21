const ResumoPerdido = () => {
    async function getResumo() {
        const resumo = await fetch("http://localhost:3001/pedido")
        const resumoJson = await resumo.json()
        console.log(resumoJson)
    }
    return (
        <div>
        <p>Seu pedido foi perdido, por favor, tente novamente.</p>
        </div>
    );
    };

export default ResumoPerdido;