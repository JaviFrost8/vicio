import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Ayuda } from './pages/Ayuda';
import { Navbar } from './components/Navbar';
import { GameFlow } from './pages/GameFlow';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<GameFlow />} />
        <Route path='/help' element={<Ayuda />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
