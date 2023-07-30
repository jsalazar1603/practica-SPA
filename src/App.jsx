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
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/atanagildo/:nombre' element={<Atanagildo/>}/>
        <Route path='/ataulfo/:nombre' element={<Ataulfo/>}/>
        <Route path='/ervigio/:nombre' element={<Ervigio/>}/>
        <Route path='/leovigildo/:nombre' element={<Leovigildo/>}/>
        <Route path='/recesvinto/:nombre' element={<Recesvinto/>}/>
        <Route path='/sisebuto/:nombre' element={<Sisebuto/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
