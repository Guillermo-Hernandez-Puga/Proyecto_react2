import './App.css'
import Registro from './components/registro/Registro'



function App () {
  return (
    <div className='padre'>
    <div className="container w-50">
      <h1>Crea una cuenta</h1>
     
      <h5>O usa tu email para registrarte</h5>
      <Registro/>

    </div>
    </div>
  )
}

export default App