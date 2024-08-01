import React from 'react'
import { useState } from "react";

import Analyticss from '../../components/Analytics';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
  
const Analytics = () => {
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
            <Analyticss />
    </div>
    </>
  )
}

export default Analytics