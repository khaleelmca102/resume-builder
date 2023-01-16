import React from 'react'

const Login = () => {
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
                          placeholder="Enter User Email" 
                          required
                          //autoComplete="off"
                          onChange={e=>setEmail(e.target.value)} 
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
                          onChange={e=>setPassword(e.target.value)} 
                        />
                        <div className="clear"></div>
                        <div className="error"></div>
                      </div>
                    </div>
                    <div className="mb-3 fs-12">
                      <div className="form-check float-start ps-0">
                        <input type="checkbox" id="remember_me" name="chkLanguage" className="login-wrap-checkbox chk-remember"/>
                        <label className="form-check-label ps-1" >Remember me</label>
                      
                        <a href="https://www.tutorialspoint.com/articles/forgot-password.php" className="" id="spanForgot">
                          <u><i className="fal fa-user-clock me-1"></i> Forgot password?</u>
                        </a>
                      </div>
                      <div className="clear"></div>
                    </div>
                                      
                    <div id="signinAlert" className="alert_sign login_alert_sign"></div>
                    <div className="clear"></div>
                    <div className="align-items-center mt-0 mb-3 text-center">
                      <div className="d-grid">
                        <button className="btn btn-primary mb-0 btn-login" id="submitLogin" name="submitLogin"><i className="fal fa-sign-in"></i> Login</button>
                      </div>
                    </div>                    
                    <hr />
                    <div className="text-center mb-2">
                      <span>Don't have an account? &nbsp;&nbsp;<a href="https://www.tutorialspoint.com/articles/singup.php"className="ps-2"><b><i className="fal fa-sign-in"></i> Sign Up</b></a></span>
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