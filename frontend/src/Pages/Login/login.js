import React, { useState,useEffect } from "react";
import "./login.css";
import motorlogo from "../../components/assets/logo.png.png";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async() => {
    let result = await fetch(`${process.env.REACT_APP_API}/login`,{
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    result = await result.json();
    if (result.name){
        
      sessionStorage.setItem("user",JSON.stringify(result));
        navigate("/");
    }else{
        alert("please check your credentials");
    }
  };
 
  useEffect(()=>{
    const auth = sessionStorage.getItem('auth');
    if (auth) {
      navigate("/")
    }
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
            <div className="maincard d-flex mx-auto my-5">
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12 c1 p-5">
                  <div className="row mb-5 m-3"> </div>
                  <img
                    src={motorlogo}
                    width="auto"
                    height="100vh"
                    className="mainimagebh mx-auto d-flex"
                    alt="Teacher"
                  />
                  <div className="row justify-content-center">
                    <div className="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                      <h1 className="wlcm">Admin Dashboard<br></br><span>Welcome</span> </h1>
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5 mainformgap">
                  <div className="row">
                    {/* <nav className="nav font-weight-500 mb-1 mb-sm-2 mb-lg-5 px-sm-2 px-lg-5"> <a className="nav-link" href="#">Writer</a> <a className="nav-link ac" href="#">Editor</a> <a className="nav-link" href="#">Administrator</a> </nav> */}
                  </div>
                  <div
                    
                    
                    className="px-5 pb-5"
                  >
                    <div className="d-flex">
                      <h3 className="font-weight-bold">Log in</h3>
                    </div>
                    <input type="email" placeholder="Email" className="mt-3"
                    onChange={(e)=>setEmail(e.target.value)} value={email} />
                    <input
                      type="password"
                      className="mt-3"
                      placeholder="Password"
                      onChange={(e)=>setPassword(e.target.value)} value={password}
                    />
                    <span className="ac mt-1" >
                      Forgot?
                    </span>
                    <div className="d-flex align-items-center justify-content-center">
                    <button className="text-white text-weight-bold bt mt-3"
                    onClick={handleLogin}
                    >
                      Log in
                    </button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
