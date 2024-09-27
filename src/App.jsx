import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'
import Footer from './Components/Footer/Footer'
import Signup from './Components/SignUp/Signup'


const App = () => {
  return (
    <div className='app'>
      <Signup/>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
