import React, { useState } from 'react';


import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Servicecentretable from '../../components/Servicecentretable';

const Servicecentre = () => {
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
            <Servicecentretable />
    </div>
    </>
  )
}

export default Servicecentre