import './App.css' 
import ApresentationScreen from './pages/ApresentationScreen/ApresentationScreen'
import Home from './pages/Home/Home'
import Pagamento from './pages/Pagamento/Pagamento'
import MontarMarmita from './pages/MonteSuaMarmita/MontarMarmita'

function App() {

  return (
    <>
      <div className='divApp'>
        {/* <Home /> */}
        {/* <ApresentationScreen /> */}
        {/* < Pagamento /> */}
        <MontarMarmita />
      </div>
    </>
  )
}

export default App
