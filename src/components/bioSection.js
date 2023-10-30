import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import WOW from 'wowjs';

import bioImg from '../Assets/common/secvice.png'
import tagImg from '../Assets/common/tag-img.png'


function BioSection() {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);

    
  return (

    <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <div class="section-content">
                    <h2 class="section-title mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">About Us</h2>
                    <div class="title-btm-border mb-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s"></div>
                </div>
            </div>
        </div>
          <div className="row gy-5">
          <div className="col-lg-6 position-relative">
                <div className="bio-right-section">
                    <div className="bio-section-thumb">
                        <img src={bioImg} alt="bio-thumb" />
                    </div>
                    <span className="bio-section-tag--img top_image_bounce">
                        <img src={tagImg} alt="bio-thumb" />
                    </span>
                    <div className="bio-section-tag top_image_bounce_2">      
                    <div className="odometer odometer-auto-theme" data-count="1254">12345</div>
                        <p className="tag-text-content">Our Client</p>   
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
              <div className='user-into wow animate__animated animate__slideInUp'>
                      <div className='section-tag mb-3'><FontAwesomeIcon icon={faUser} /> About</div>
                      <h1 className='title mb-4'>Every great design begin with.</h1>
                      <p className='subtitle'>Since beginning my journey as a freelance designer nearly 8 years ago,
                        I've done remote work for agencies,
                        consulted for startups, and collaborated with talented people
                        to create digital products for both business and consumer use.
                        I'm quietly confident, naturally curious,
                        and perpetually working on improving my chopsone design problem at a time.
                      </p>
                  </div>
            </div>
          </div>
      </div>

  );
}

export default BioSection;
