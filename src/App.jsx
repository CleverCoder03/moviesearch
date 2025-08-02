import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './pages/home'
import Favourites from './pages/favourites'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourites />}/>
      </Routes>
    </div>
    </div>
  )
}

export default App
