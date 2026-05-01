import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <div className='container'>
        <h2>Hello, World</h2>
        <div className='card'>
          <h3>Usuário</h3>
          <input type="email" placeholder='example@gmail.com' />
          <h3>Senha</h3>
          <input type="password" placeholder='*****'/>
          <a href="">Esqueci a senha</a>
          <div className='login-icons'>

            <img src="/googleIcon.png" className='icon' alt="" />

            <img src="/facebookIcon.png" className='icon' alt="" />

            <img src="/githubIcon.png" className='icon' alt="" />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
