import React,{ useState } from "react";
import "./dashboard.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Home from "../../components/Home";
import Table from "../../components/Brandtable";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";


function App() {
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
              <Home />
              

      </div>
    </>
  );
}

export default App;
