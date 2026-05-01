import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import '../cadastro.css'

function Cadastro() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <div className='container'>
        <h2>Cadastro</h2>
        <div className='card'>
          <h3>Nome</h3>
          <input type="value" placeholder='Gabriel' />
            <h3>Sobrenome</h3>
          <input type="text" placeholder='Marques'/>


          <h3>Senha</h3>
          <input type="password" placeholder='*****'/>
          <a href="">Esqueci a senha</a>
          <div className='login-icons'>

            <img src="/googleIcon.png" className='icon' alt="" />

            <img src="/facebookIcon.png" className='icon' alt="" />

            <img src="/githubIcon.png" className='icon' alt="" />

            
          </div>
            {/* Use o Link para navegar para a rota que você criou no App.jsx */}
            
            <Link to="/cadastro">Cadastrar</Link>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;
