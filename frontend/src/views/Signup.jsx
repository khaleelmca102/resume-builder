import React from "react"
import { useRef } from "react";
import { useState } from "react"
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [signUpFlag, setSignUpFlag] = useState(true);
  const [otpFlag, setOtpFlag] = useState(false);
  const [passwordFlag, setPasswordFlag] = useState(false);

  const {setUser, setToken} = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value
    }

    axiosClient.post('/signup',payload)
      .then(({data}) => {
        setToken(data.token);
        setUser(data.user);
      })
      .catch(error => {
        const response = error.response;
        if(response && response.status === 422){
          console.log(response.data.errors);
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
                  <div className="p-4 pb-1 pt-2 mt-2 mb-2" id="signupForm" >
                    {signUpFlag &&
                    <div className="" id="divSignup">
                      <div className="login-heading mb-3 text-center"><h4> Signup </h4></div>
                      <div className="mb-3">
                        <div className="input-group input-group-lg border-bottom">
                          <span className="input-group-text border-0 text-secondary pe-2"><i className="fal fa-user fal-fa-icon"></i></span>
                          <input 
                            type="text" 
                            className="txtclassName form-control ps-1"
                            id="txtFullName" 
                            name="txtFullName"
                            placeholder="Enter Full Name"
                            required 
                            autoComplete="off"
                            ref={nameRef}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="input-group input-group-lg border-bottom">
                          <span className="input-group-text border-0 text-secondary pe-2"><i className="fal fa-envelope fal-fa-icon"></i></span>
                          <input 
                            type="email" 
                            className="txtclassName form-control ps-1" 
                            id="txtEmailId"
                            name="txtEmailId"
                            placeholder="Enter Email" 
                            required 
                            autoComplete="off"     
                            ref={emailRef}      
                          />
                        </div>
                      </div>		
                      <div className="form-check d-flex ps-1 mb-1">
                        <input 
                          type="checkbox"
                          id="chkPromotionalEmail" 
                          name="chkPromotionalEmail" 
                          checked={true} 
                          onChange={() => {}}
                        />&nbsp;&nbsp;
                        <label className="form-check-label fs-12 ps-2" >I’m in for emails with exciting discounts and newsletter.</label>
                      </div>
                      <div className="clear"></div>    
                      <div className="align-items-center mt-0 mb-3 text-center">
                        <div className="d-grid">
                          <button onClick={onSubmit} className="btn btn-primary mb-0 btn-login" id="submitSingup" name="submitSingup"><i className="fal fa-sign-in"></i> Signup</button>
                        </div>
                      </div>
                      <div id="" className="form-text fs-12 mb-4">
                        By signing up, you agree to our <b><a href="https://www.tutorialspoint.com/about/about_terms_of_use.htm" target="_blank">Terms of Use</a></b> and <b><a href="https://www.tutorialspoint.com/about/about_privacy.htm" target="_blank">Privacy Policy</a></b>
                      </div>															
                    </div>	
                    }
                    {otpFlag &&
                      <div className="" id="divSignupOtp">
                        <div className="login-heading mb-3 text-center"><h4> Enter OTP </h4></div>
                        <div id="signupOTPAlert" className="alert login_alert"></div>
                        <div className="mb-3">
                          <div className="input-group input-group-lg border-bottom">
                            <span className="input-group-text border-0 text-secondary pe-2"><i className="fal fa-key fal-fa-icon"></i></span>
                            <input type="email" className="txtclassName form-control ps-1" id="txtSignupOTP" name="txtSignupOTP" placeholder="Enter User Email For Get OTP" required autoComplete="off" />
                          </div>
                        </div>
                        <div id="signupOTPError" className="alert_sign login_alert_sign"></div>
                        <div className="align-items-center mt-0 mb-3 text-center">
                          <div className="d-grid">
                            <button className="btn btn-primary mb-0 btn-login" id="btnCheckSignupOtp" name="btnCheckSignupOtp"><i className="fal fa-sign-in"></i> Get OTP</button>
                          </div>
                        </div>
                      </div>
                    }
                    {passwordFlag &&
                      <div className="" id="divOTPPassword" style={{display:"none"}}>
                        <div className="login-heading mb-3 text-center"><h4> Enter Password </h4></div>
                        <div className="mb-3">
                          <div className="input-group input-group-lg border-bottom">
                            <span className="txtclassName input-group-text text-secondary pe-2"><i className="fal fa-key fal-fa-icon"></i></span>
                            
                            <input type="password" className="form-control border-0 rounded-end ps-1" name="txtNewPassword" id="txtNewPassword" placeholder="Enter Password" autoComplete="off"/>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <div className="input-group input-group-lg border-bottom">
                            <span className="txtclassName input-group-text text-secondary pe-2"><i className="fal fa-key fal-fa-icon"></i></span>
                            
                            <input type="password" className="form-control border-0 rounded-end ps-1" name="txtConfirmPassword" id="txtConfirmPassword" placeholder="Re Enter Password" autoComplete="off"/>
                          </div>
                        </div>							
                              
                        <div id="signupPasswordAlert" className="alert_sign login_alert_sign"></div>
                        
                        <div className="align-items-center mt-0 mb-3 text-center">
                          <div className="d-grid">
                            <button className="btn btn-primary mb-0 btn-login" id="btnSignupPassword" name="btnSignupPassword"><i className="fal fa-sign-in"></i> Submit</button>
                          </div>
                        </div>
                      </div>
                    }
                    <hr />
                    <div className="text-center fs-8 mb-2">
                      <span>Already have an account ? &nbsp;&nbsp;
                        <a href="https://www.tutorialspoint.com/articles/login.php"className="ps-2"><b><i className="fal fa-sign-in"></i> Login</b></a></span>
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

export default Signup