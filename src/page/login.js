import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import WOW from 'wowjs';
import { Link } from "react-router-dom";


function Login() {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);

    
  return (

    <div className="container py-115">
          <div className="row">
            <div className="col-lg-12">
                <div className="section-content">
                    <h2 className="section-title mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">User Benefit</h2>
                    <div className="title-btm-border mb-3 wow animate__animated animate__fadeInUp"  data-wow-delay="0.3s"></div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="log-in-box login wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              <h2 className="welcome-text mb-4">Welcome Back !</h2>
              <form>
                  <div className="form-group pwow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                      <input type="email" autocomplete="off" placeholder=" "  className="form--control mb-3" />
                      <label className="form--label">Email</label>
                  </div>
                  <div className="form-group wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                      <input type="password" autocomplete="off" placeholder=" " className="form--control mb-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.4s"/>
                      <label className="form--label">Password</label>
                  </div>
                  <div className="login-meta mb-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                      <div className="form--check">
                          <input className="form-check-input" type="checkbox" value=""/>
                          <label className="form-check-label">Remember Me</label>
                      </div>
                      <a href="#">Forgot Password ?</a>
                  </div>
                  <button className="btn btn--base wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">Login</button>
              </form>
              <p className="pt-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">Don't Have An Account? <Link to='/Signin'>Create Account</Link></p>
            </div>
          </div>
      </div>  
    </div>
  );
}

export default Login;
