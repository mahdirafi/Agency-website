import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
 

function App() {
  

  return (
    <div>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
