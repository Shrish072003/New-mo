import React from 'react'
import { useState } from "react";


import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import OwnersReview from '../../components/OwnersReview';
  
const OwnersReviewTable = () => {
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
            <OwnersReview />
    </div>
    </>
  )
}

export default OwnersReviewTable