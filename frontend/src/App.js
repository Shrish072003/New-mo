import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Brand from "./Pages/Dashboard/Brand";
import Users from "./Pages/Dashboard/Users";
import Product from "./Pages/Dashboard/Product";
import Variant from "./Pages/Dashboard/Variant";
import Dealership from "./Pages/Dashboard/Dealershippage";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ViewProduct from "./Pages/viewproduct";
import AddVariant from "./Pages/Dashboard/AddVariant";
import EditBrand from "./Pages/Dashboard/EditBrand";
import EditProduct from "./Pages/Dashboard/EditProduct";
import EditVariant from "./Pages/Dashboard/EditVariant";
import Login from "./Pages/Login/login";
import Analytics from "./Pages/Dashboard/analytics";
import Signup from "./Pages/Signup/signup";

import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";

import PrivateComponent from "./components/PrivateComponent";
import OwnersReviewTable from "./Pages/Dashboard/OwnersReviewTable";
import Servicecentre from "./Pages/Dashboard/Servicecentre";
import RtoPage from "./Pages/Dashboard/RtoPage";
import AddRtoData from "./Pages/Dashboard/AddRtoData";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/users" element={<Users />} />
              <Route path="/product" element={<Product />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/addvariant" element={<AddVariant />} />
              <Route path="/Variant" element={<Variant />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/servicecentre" element={<Servicecentre />} />
              <Route path="/dealership" element={<Dealership />} />
              <Route path="/rto-data" element={<RtoPage />} />
              <Route path="/add-rto-data" element={<AddRtoData />} />
              <Route path="/owner-review-table" element={<OwnersReviewTable />} />
              <Route path="/viewproduct/:id" element={<ViewProduct />} />
              <Route path="/editbrand/:id" element={<EditBrand />} />
              <Route path="/editproduct/:id" element={<EditProduct />} />
              <Route path="/editvariant/:id" element={<EditVariant />} />
            </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
