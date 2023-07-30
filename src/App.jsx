import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Atanagildo from './pages/Atanagildo.jsx';
import Ataulfo from './pages/Ataulfo.jsx';
import Ervigio from './pages/Ervigio.jsx';
import Leovigildo from './pages/Leovigildo.jsx';
import Recesvinto from './pages/Recesvinto.jsx';
import Sisebuto from './pages/Sisebuto.jsx';
import Nav from './components/Nav.jsx';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='nav-bar'>
        <Nav/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:nombre/' element={<Atanagildo/>}/>
        <Route path='/:nombre' element={<Ataulfo/>}/>
        <Route path='/:nombre' element={<Ervigio/>}/>
        <Route path='/:nombre' element={<Leovigildo/>}/>
        <Route path='/:nombre' element={<Recesvinto/>}/>
        <Route path='/:nombre' element={<Sisebuto/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
