import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './pages/home'
import Favourites from './pages/favourites'
import Navbar from './components/Navbar'
import { MovieProvider } from './context/MovieContext'

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <div className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourites />}/>
      </Routes>
    </div>
    </MovieProvider>
  )
}

export default App
