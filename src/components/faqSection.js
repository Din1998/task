import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import WOW from 'wowjs';
import Accordion from 'react-bootstrap/Accordion';
import faqImg from '../Assets/faq/faq.png'


function FaqSection() {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);

    
  return (

    <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <div className="section-content">
                    <h2 className="section-title mb-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">Frequently Asked</h2>
                    <div className="title-btm-border mb-3 wow animate__animated animate__fadeInUp"  data-wow-delay="0.3s"></div>
                </div>
            </div>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6 position-relative">
            <div className="faq-left-side wow animate__animated animate__fadeInUp"  data-wow-delay="0.3s">
               <div className="faq-section-thumb">
                <img src={faqImg} alt="faq-thumb" />
              </div>
            </div>
             
          </div>
           {/* faq according */}
            <div className="col-lg-6">
            <Accordion className="custom--accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is [Your Company Name] and what do you offer</Accordion.Header>
                    <Accordion.Body>
                    [Your Company Name] is a leading provider of innovative software solutions designed to streamline your business operations and enhance efficiency. We offer a range of software products tailored to meet your specific needs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> How can I contact [Your Company Name]?</Accordion.Header>
                    <Accordion.Body>
                    You can reach our customer support team via email at support@yourcompany.com or by calling our toll-free number: 1-800-123-4567.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What does [Product Name] do?</Accordion.Header>
                    <Accordion.Body>
                    [Product Name] is a powerful software solution designed to [brief description of what the software does].
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What platforms is [Product Name] available on?</Accordion.Header>
                    <Accordion.Body>
                    [Product Name] is currently available for Windows, macOS, and iOS. We're continuously working to expand our platform compatibility.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>How much does [Product Name] cost?</Accordion.Header>
                    <Accordion.Body>
                    Our pricing varies based on the specific package you choose. Please visit our Pricing page on our website for detailed information on our different plans.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>How do I install [Product Name]?</Accordion.Header>
                    <Accordion.Body>
                    Installation instructions are provided on our website. You'll receive a step-by-step guide along with your purchase.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
               
            </div>
        </div>
      </div>

  );
}

export default FaqSection;
