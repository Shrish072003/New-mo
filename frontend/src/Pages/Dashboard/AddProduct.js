import React from 'react'
import { useState } from "react";

import Addproduct from '../../components/Addproduct';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
  
const AddProduct = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  return (
    <>
          <div className="grid-container">
        
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
            <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Addproduct />
    </div>
    </>
  )
}

export default AddProduct