import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Ayuda } from './pages/Ayuda';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/help' element={<Ayuda />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
