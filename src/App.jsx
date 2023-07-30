import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Rey from './pages/Rey.jsx'
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
        <Route path='/:nombre/' element={<Rey/>}/>
        <Route path='/:nombre' element={<Rey/>}/>
        <Route path='/:nombre' element={<Rey/>}/>
        <Route path='/:nombre' element={<Rey/>}/>
        <Route path='/:nombre' element={<Rey/>}/>
        <Route path='/:nombre' element={<Rey/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
