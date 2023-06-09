import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import axios from 'axios';
import CoinsPage from './Pages/CoinsPage';
import Footer from './components/Footer';
import Accounts from './Pages/Accounts';

function App() {
  const [coins, setCoins]= useState([])
  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true&locale=en'

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins(response.data)
      // console.log(response.data)
    })
  },[url])


  return <ThemeProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home coins={coins}/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Accounts' element={<Accounts/>}/>
      <Route path='/coin/:coinId' element={<CoinsPage/>}>
        <Route path=':coinId'/>
      </Route>
    </Routes>
    <Footer/>
  </ThemeProvider>
}

export default App;
