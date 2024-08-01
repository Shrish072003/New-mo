import React from 'react'
import { useState } from "react";

import EditVariant from '../../components/EditVariant';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
  
const Editvariant = () => {
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
            <EditVariant />
    </div>
    </>
  )
}

export default Editvariant