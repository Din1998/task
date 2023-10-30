import { useEffect } from "react";
import WOW from 'wowjs';


import icon from '../Assets/featured/icon1.gif'
import icon1 from '../Assets/featured/icon2.gif'
import icon2 from '../Assets/featured/icon3.gif'
import icon3 from '../Assets/featured/icon4.gif'
import icon4 from '../Assets/featured/icon5.gif'
import icon5 from '../Assets/featured/icon6.gif'

import secviceImg from '../Assets/faq/service.png'

function ServiceSection() {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);

    
  return (

    <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <div className="section-content">
                    <h2 className="section-title mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">Our Service</h2>
                    <div className="title-btm-border mb-3 wow animate__animated animate__fadeInUp"  data-wow-delay="0.3s"></div>
                </div>
            </div>
        </div>
          <div className="row gy-4">
            <div className="col-lg-8">
                <div className="feature-items">
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="key-feature-box wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                <div className="feature-thumb">
                                    <img src={icon} alt="feature-icon" />
                                </div>
                                <h6 className="service-name">Global</h6>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="key-feature-box wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                                <div className="feature-thumb">
                                    <img src={icon1} alt="feature-icon" />
                                </div>
                                <h6 className="service-name">24/7 Support</h6>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="key-feature-box wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                <div className="feature-thumb">
                                    <img src={icon2} alt="feature-icon" />
                                </div>
                                <h6 className="service-name">Secure</h6>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="key-feature-box wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                <div className="feature-thumb">
                                    <img src={icon3} alt="feature-icon" />
                                </div>
                                <h6 className="service-name">Certified</h6>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="key-feature-box wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                                <div className="feature-thumb">
                                    <img src={icon4} alt="feature-icon" />
                                </div>
                                <h6 className="service-name">User Friendly</h6>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="key-feature-box wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                <div className="feature-thumb">
                                    <img src={icon5} alt="feature-icon" />
                                </div>
                                <h6 className="service-name">Profitable</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="service-right-content">
                    <div className="service-section-thumb">
                        <img src={secviceImg} />
                    </div>
                </div>
            </div>
          </div>
      </div>

  );
}

export default ServiceSection;
