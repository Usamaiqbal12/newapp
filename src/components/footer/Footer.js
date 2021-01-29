import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Footer = () => {
  return (
    <footer className="container-fluid bg-dark py-5">
    <div className="container">
       <div className="row">
          <div className="col-md-6">
             <div className="row">
                <div className="col-md-6 ">
                   <div className="logo-part">
                      <p className="w-50 logo-footer footer-head" >QOTRT</p>
                      <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                      <p>Use this tool as test data for an automated system or find your next pen</p>
                   </div>
                </div>
                <div className="col-md-6 px-4">
                   <h6> About Company</h6>
                   <p>But horizontal lines can only be a full pixel high.</p>
                   <a href="#" className="btn-footer a"> More Info </a><br/>
                   <a href="#" className="btn-footer a"> Contact Us</a>
                </div>
             </div>
          </div>
          <div className="col-md-6">
             <div className="row">
                <div className="col-md-6 px-4">
                   <h6> Help us</h6>
                   <div className="row ">
                      <div className="col-md-6">
                         <ul>
                            <li> <a className='a' href="#"> Home</a> </li>
                            <li> <a href="#" className='a'> About</a> </li>
                            <li> <a href="#" className='a'> Service</a> </li>
                            <li> <a href="#" className='a'> Team</a> </li>
                            <li> <a href="#" className='a'> Help</a> </li>
                            <li> <a href="#" className='a'> Contact</a> </li>
                         </ul>
                      </div>
                      <div className="col-md-6 px-4">
                         <ul>
                            <li> <a href="#" className='a'> Cab Faciliy</a> </li>
                            <li> <a href="#" className='a'> Fax</a> </li>
                            <li> <a href="#" className='a'> Terms</a> </li>
                            <li> <a href="#" className='a'> Policy</a> </li>
                            <li> <a href="#" className='a'> Refunds</a> </li>
                            <li> <a href="#" className='a'> Paypal</a> </li>
                         </ul>
                      </div>
                   </div>
                </div>
                <div className="col-md-6 ">
                   <h6> Newsletter</h6>
                   <div className="social">
                      <a className='a' href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a className='a' href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                   </div>
                   <form className="form-footer my-3">
                      <input type="text"  placeholder="search here...." name="search"/>
                      <input type="button" value="Go" />
                   </form>
                   <p>That's technology limitation of LCD monitors</p>
                </div>
             </div>
          </div>
       </div>
    </div>
    </footer>
  );
};

export default Footer;
