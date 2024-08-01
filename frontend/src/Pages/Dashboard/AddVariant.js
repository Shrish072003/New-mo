import React from 'react'
import { useState } from "react";

import AddVariant from '../../components/AddVariant';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
  
const Addvariant = () => {
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
            <AddVariant />
    </div>
    </>
  )
}

export default Addvariant