import './App.css'
import Registro from './components/registro/Registro'
import SocialButton from './components/socialButton/SocialButton'


function App () {
  return (
    <div className="container">
      <h1>Crea una cuenta</h1>
     <SocialButton/>
      <h5>O usa tu email para registrarte</h5>
      <Registro/>

    </div>
  )
}

export default App