import React from 'react'
import { useState } from "react";

import EditBrand from '../../components/Editbrand';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
  
const Editbrand = () => {
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
            <EditBrand />
    </div>
    </>
  )
}

export default Editbrand