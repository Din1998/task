import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import WOW from 'wowjs';
import bioImg from '../Assets/common/secvice.png'
import tagImg from '../Assets/common/tag-img.png'


function About() {
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

          {/*  */}
          <div className="row pt-80">
            <div className="col-lg-6">
              <div className="benefit-key-point mb-3">
                <h3 className="title mb-40">What you will Find ?</h3>
                <ul>
                    <li className="animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                        <span><i className="fa-regular fa-circle-check"></i></span>
                        <p>Allow you to precisely target your audience based on demographics, interests, behavior, location, and more.</p>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                        <span><i className="fa-regular fa-circle-check"></i></span>
                        <p>With PPC, you only pay when someone clicks on your ad, and with CPM, you pay for impressions.</p>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                        <span><i className="fa-regular fa-circle-check"></i></span>
                        <p> PPC campaigns can provide instant visibility for your brand, products, or services.</p>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                        <span><i className="fa-regular fa-circle-check"></i></span>
                        <p>Both PPC and CPM platforms offer detailed analytics and performance tracking tools.</p>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                        <span><i className="fa-regular fa-circle-check"></i></span>
                        <p>PPC and CPM platforms provide flexibility in ad scheduling, ad copy, creative formats, and targeting options.</p>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                        <span><i className="fa-regular fa-circle-check"></i></span>
                        <p>Targeted advertising and performance tracking help improve your return on investment (ROI).</p>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
                      <span><i className="fa-regular fa-circle-check"></i></span>
                      <p>Targeted advertising and performance tracking help improve your return on investment (ROI).</p>
                  </li>
                </ul>
            </div>
            </div>
            <div className="col-lg-6 position-relative">
                <div className="about-section-thumb mt-5">
                  <img src={bioImg} alt="about-section-thumb" />
                </div>
                <span className="about-section-tag--img top_image_bounce">
                  <img src={tagImg} alt="about-section-thumb" />
                </span>
                <div className="about-section-tag top_image_bounce_2">      
                  <div className="odometer">1254</div>
                  <p className="tag-text-content">Our Client</p>   
              </div>
            </div>
        </div>
        {/*  */}
        <div className="row gy-4 pt-80">
            <div className="about-content">
                <h3 className="title mb-40">How is it works !</h3>
            </div>
            <div className="col-lg-4 text-center">
                <div className="info-box">
                    <i className="fa-solid fa-check"></i>
                    <h3 className="title">Choose your best match</h3>
                    <p className="subtitle">Bring to the table win-win survival strategies to ensure proactive domination going forward.</p>
                </div>
            </div>
            <div className="col-lg-4 text-center">
                <div className="info-box">
                     <i className="fa-solid fa-trophy"></i>
                    <h3 className="title">Get your work done</h3>
                    <p className="subtitle">Efficiently unleash cross-media information without. Quickly maximize return on investment.</p>
                </div>
            </div>
            <div className="col-lg-4 text-center">
                <div className="info-box">
                    <i className="fa-solid fa-award"></i>
                    <h3 className="title">Give feedback and repeat</h3>
                    <p className="subtitle">Nanotechnology immersion along the information highway will close the loop on focusing solely.</p>
                </div>
            </div>
        </div>
      </div>

    
  );
}

export default About;
