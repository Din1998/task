import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import WOW from 'wowjs';




function SignIn() {
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
         
            <div className="col-xl-6">
              <div className="log-in-box">
                <div className=" sign-up_box wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                        <h3 className="title wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">Please SignUp</h3>
                        <form>
                            <div className="row wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                                <div className="col-xxl-6 col-lg-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <input className="form--control" placeholder="" />
                                        <label className="form--label">First Name</label>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-lg-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <input className="form--control" placeholder="" />
                                        <label className="form--label">Last Name</label>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                              <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                    <input className="form--control mb-3" placeholder="" />  
                                    <label className="form--label">Email</label>
                                </div>
                              </div>
                            </div>
                            
                            <div className="row wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                <div className="col-sm-6 mb-3">
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <select className="form--control" name="country">
                                                <option data-mobile_code="93" value="Afghanistan" data-code="AF">Afghanistan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-lg-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">+880</span>
                                            <input type="text" className="form--control" placeholder="Phone" aria-label="Dollar amount (with dot and two decimal places)" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="row wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
                                <div className="col-xxl-6 col-lg-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <input className="form--control mb-3" placeholder="" />
                                        <label className="form--label">Password</label>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-lg-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <input className="form--control mb-3" placeholder="" />
                                        <label className="form--label">Re-Enter Password</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 form--check wow animate__animated animate__fadeInUp" data-wow-delay="0.9s"> 
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck" />
                                <label className="form-check-label" for="defaultCheck">
                                    I agree with Licences Info.
                                </label>
                            </div>
                              <button className="btn btn--base wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">Submit</button>
                        </form>
                  </div>
              </div>
              
            </div>
          </div>
      </div>

  );
}

export default SignIn;
