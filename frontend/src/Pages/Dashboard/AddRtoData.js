import React,{ useState } from 'react'



import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import RtoDataAdd from '../../components/RtoDataAdd';

const AddRtoData = () => {
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
      <RtoDataAdd />
</div>
</>
  )
}

export default AddRtoData
