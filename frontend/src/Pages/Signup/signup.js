import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import 'fa-icons';
import "./signup.css";

const SignUp = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch(`${process.env.REACT_APP_API}/register`, {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.warn(result);
    sessionStorage.setItem("user", JSON.stringify(result)); // Changed from localStorage to sessionStorage
    navigate("/");
  };
  
  return (
    
    <section className="vh-100 the-bhuder" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="maincard text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" placeholder="Enter Full Name" className="form-control"
                     value={name} onChange={(e)=>setName(e.target.value)} />
                      {/* <label className="form-label" for="form3Example1c">Your Name</label> */}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" placeholder='Enter Email' className="form-control" 
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                      />
                      {/* <label className="form-label" for="form3Example3c">Your Email</label> */}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" placeholder='Enter Password' className="form-control" 
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                      />
                      {/* <label className="form-label" for="form3Example4c">Password</label> */}
                    </div>
                  </div>

                  

                  {/* <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div> */}

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn nerbt btn-lg"
                    onClick={collectData}
                    >Register</button>
                  </div>

                </form>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default SignUp