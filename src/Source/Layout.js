import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
const Layout = ({children}) => {


  return (
    <div>
    <Navbar/>
    <SideBar/>
    {children}
    </div>
  )
}

export default Layout
