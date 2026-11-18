import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import NotFound from './Components/NotFound.jsx'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/blogs/Blogs.jsx'
import Pricing from './Pages/home/Pricing.jsx'
import Services from './Pages/home/Services.jsx'
import Login from './Components/Login.jsx'
import Registration from './Components/Registration.jsx'
 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="pricing" element={<Pricing />} />
        <Route path="service" element={<Services />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>

      {/* NotFound page */}
      <Route path="*" element={<NotFound />} />

      {/* Authentication */}
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />



    </Routes>
  </BrowserRouter>
)