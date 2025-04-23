import React, { useEffect, useState } from 'react';import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar'
import './index.css';
import IPhoneList from './pages/IPhoneList';
import AddIPhone from './pages/AddIPhone';
import EditIphone from './pages/EditIphone';
import Showiphone from './pages/Showiphone';



const App = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/iphone-list' element={<IPhoneList/>}/>
        <Route path='/show/:id' element={<Showiphone/>}/> 
        <Route path='/add' element={<AddIPhone/>}/>  
        <Route path="/edit/:id" element={<EditIphone />} />
      </Routes>
    </div>
  )
}

export default App
