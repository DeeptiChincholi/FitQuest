import { useState } from 'react'
import Home from './components/home/home'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleMapsProvider } from './contexts/GoogleMapsContext'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <GoogleMapsProvider>
   <GoogleOAuthProvider clientId='455096351637-kbqdac26mj4fsbj8c5roj92brd8qepv5.apps.googleusercontent.com'>
  <div className='flex flex-col bg-gradient-to-r from-black  to-black text-white'>
      <Navbar/>
     <Home/>
      <Footer/>
      </div>
      </GoogleOAuthProvider>
      </GoogleMapsProvider>

  )
}

export default App
