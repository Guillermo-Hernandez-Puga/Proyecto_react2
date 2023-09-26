import './App.css'
import Formulario from './components/formulario/Formulario'
import SocialButton from './components/socialButton/SocialButton'
import Alert from './components/alert/Alert'


const App = () => {
  return (
    <div className="container">
      <h1>Crea una cuenta</h1>
     <SocialButton/>
      <h5>O usa tu email para registrarte</h5>
      <Formulario/>
      <Alert/>

    </div>
  )
}

export default App