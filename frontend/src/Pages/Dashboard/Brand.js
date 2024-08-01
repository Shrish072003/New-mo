import React from 'react'
import { useState } from "react";

import Brandtable from '../../components/Brandtable';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
  
const Brand = () => {
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
            <Brandtable />
    </div>
    </>
  )
}

export default Brand