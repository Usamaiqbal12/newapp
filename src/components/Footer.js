import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              About Us
            </h5>
            <p className="text-dark">
              Lorem ipsum dolor sit amet, ital consectetur lorem ipsum dolor sit
              amet adipisicing elit. Lorem ipsum dolor sit amet, ital
              consectetur lorem ipsum dolor sit amet adipisicing elit.
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Accessibility
            </h5>
            <p>
              <Link to="/" className="text-dark">
                Home
              </Link>
            </p>
            <p>
              <Link to="/profile" className="text-dark">
                Profile
              </Link>
            </p>
            <p>
              <Link to="/createsearch" className="text-dark">
                Create Data Set
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact Us
            </h5>
            <p class="text-dark">
              <i className="fa fa-envelope fa-lg mr-3"></i>abc@gmail.com
            </p>
            <p class="text-dark">
              <i className="fa fa-instagram fa-lg mr-3"></i>abc@instagram
            </p>
            <p className="text-dark">
              <i className="fa fa-facebook-square fa-lg mr-3"></i>abc@facebook
            </p>
            <p className="text-dark">
              <i className="fa fa-twitter fa-lg mr-3"></i>abc@twitter
            </p>
          </div>
        </div>

        <hr className="mb-4" />

        <div>
          <p className="text-dark text-center">
            Copyright ©2021 All rights reserved by:
            <Link to="#">
              <strong className="text-warning text-center">ABC</strong>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
