import React from 'react'
import { Outlet } from 'react-router'
import { useEffect } from 'react';
import Footer from './Footer'
import { useDispatch, useSelector } from "react-redux";
import { cartactions } from "../Store";
import Header from './Header'
const RootElement = () => {

  return (
    <div className='App'>
     <Header/>
     <Outlet/>
     <Footer/> 
    </div>
  )
}

export default RootElement
