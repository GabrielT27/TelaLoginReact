import { Routes, Route } from 'react-router-dom';
import Login from './Pages/login';
import Cadastro from './Pages/cadastro';

function App() {
  return (
    <Routes>
      {/* Aqui o App decide qual 'front' mostrar baseado na URL */}
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
  );
}

export default App;