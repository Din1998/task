import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import WOW from 'wowjs';

import heroImg1 from '../Assets/hero/hero-img.png'

import heroElement1 from '../Assets/hero/element-1.png'
import heroElement2 from '../Assets/hero/element-2.png'
import heroElement3 from '../Assets/hero/element-3.png'
import heroElement4 from '../Assets/hero/element-4.png'


import brandLogo1 from '../Assets/hero/logo1.png'
import brandLogo2 from '../Assets/hero/logo2.png'
import brandLogo3 from '../Assets/hero/logo3.png'

function HeroSection() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);


  return (
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className='user-into wow animate__animated animate__slideInUp' data-wow-delay="0.2s">
              <div className="hero-content">
                <h1 className='title animate-charcter'>TradeFlow Seamless Operations, Maximum Impact</h1>
                <p className='subtitle mb-4'>"Empowering Enterprises: Building a Dynamic Business React App for Enhanced Efficiency and Growth"</p>
              </div>
              <button className="btn btn--base mb-3"><FontAwesomeIcon icon={faArrowRight}/> Let's Move Forward</button>
            </div>
            {/* brand logo */}
            <div className="brand-logo-wraper wow animate__animated animate__slideInUp" data-wow-delay="0.5s">
              <div className=" brand-logo">
                    <div className="brand-logo-thumb">
                        <img src={brandLogo1} alt="hero-section-thumb" />
                    </div>
                    <div className="brand-logo-thumb">
                        <img src={brandLogo2} alt="hero-section-thumb" />
                    </div>
                    <div className="brand-logo-thumb">
                        <img src={brandLogo3} alt="hero-section-thumb" />
                    </div>
              </div>
          </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-section-right-content  wow animate__animated animate__slideInUp">
              <div className="animation-img-wraper">
                <img src={heroElement1} className="heroElement1" alt="hero-animation-element"/>
                <img src={heroElement2} className="heroElement2" alt="hero-animation-element"/>
                <img src={heroElement3} className="heroElement3" alt="hero-animation-element"/>
                <img src={heroElement4} className="heroElement4 top_image_bounce" alt="hero-animation-element"/>
              </div>
              <div className="hero-section-thumb">
                <img src={heroImg1}  alt="hero-thumb"/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default HeroSection;
