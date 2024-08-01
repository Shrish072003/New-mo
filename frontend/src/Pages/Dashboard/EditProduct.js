import React from 'react'
import { useState } from "react";

import Editproduct from '../../components/EditProduct';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
  
const EditProduct = () => {
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
            <Editproduct />
    </div>
    </>
  )
}

export default EditProduct