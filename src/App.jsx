import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

function App() {
  

  return (
    <div>
    <Navbar/>
    <main>
      <Home/>
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
