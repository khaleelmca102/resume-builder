import React from "react"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState(null);
  const [msg, setMsg] = useState(null);
  const {setUser, setToken, setLoader} = useStateContext();

  const hideMsg = () => {
    setLoader(false);
    setTimeout(() => {            
      setErrors(null);
      setMsg(null);
    },1000)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    const payload = {
      email_id: emailRef.current.value,
      password: passwordRef.current.value
    }

    axiosClient.post('/login',payload)
      .then(({data}) => {
        setMsg(data.message);
        setUser(JSON. stringify(data.user));
        setToken(data.token);
        hideMsg();
        navigate('/template');
      })
      .catch(err => {
        const response = err.response;
        if(response && response.status === 422){
          setErrors(response.data.errors);
          hideMsg();          
        }
      })    
  }

  return (
    <div>
      <main className="bg-light">
        <div className="container mt-4 mb-4 px-3 px-xl-3">
          <div className="row g-4">            
            <div className="col-sm-12 col-xl-12 me-1 mpc-4 login-wrap">
              <div className="card col-sm-6 col-xl-4 m-auto rounded-2 mt-xl-4 mt-md-4 mt-sm-0 border">
                <div id="divLogin">
                  <div className="p-4 pb-1 pt-2 mt-2 mb-2" id="signinForm" >
                    <div className="login-heading mb-3 text-center"><h4> Login </h4></div>
                    <div className="mb-3">
                      <div className="input-group input-group-lg border-bottom">
                        <span className="input-group-text border-0 text-secondary pe-2"><i className="fal fa-envelope fal-fa-icon"></i></span>
                        <input 
                          type="email" 
                          className="txtClass form-control ps-1" 
                          id="txtLoginEmailId" 
                          name="txtLoginEmailId" 
                          placeholder="Enter Email" 
                          required
                          //autoComplete="off"
                          ref={emailRef}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="input-group input-group-lg border-bottom">
                        <span className="txtClass input-group-text text-secondary pe-2"><i className="fal fa-key fal-fa-icon"></i></span>
                        <input 
                          type="password" 
                          className="form-control border-0 rounded-end ps-1" 
                          name="txtLoginPassword"
                          id="txtLoginPassword" 
                          placeholder="Enter Password" 
                          autoComplete="off"
                          ref={passwordRef}
                        />
                        <div className="clear"></div>
                      </div>
                    </div>
                    <div className="mb-3 fs-12">
                      <div className="form-check float-start ps-0">
                        <input type="checkbox" id="remember_me" name="chkLanguage" className="login-wrap-checkbox chk-remember"/>
                        <label className="form-check-label ps-1" >Remember me</label>&nbsp;&nbsp;
                        <Link to='/forgotpassword' ><u><i className="fal fa-user-clock me-1"></i> Forgot password?</u></Link>
                      </div>
                      <div className="clear"></div>
                    </div>
                                      
                    <div id="signinAlert" className="alert_sign login_alert_sign"></div>
                    <div className="clear"></div>
                    <div className="align-items-center mt-0 mb-3 text-center">
                      <div className="d-grid">
                        <button onClick={onSubmit} className="btn btn-primary mb-0 btn-login" id="submitLogin" name="submitLogin"><i className="fal fa-sign-in"></i> Login</button>
                      </div>
                    </div>       
                    {errors && <div className="login_alert_sign">
                      {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                      ))}
                    </div>
                    }                  
                    <hr />
                    <div className="text-center mb-2">
                      <span>Don't have an account? &nbsp;&nbsp;
                        <Link to="/signup"><b><i className="fal fa-sign-in"></i> Sign Up</b></Link>
                      </span>
                    </div>
                  </div>
                </div>					
              </div>
            </div>            
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login