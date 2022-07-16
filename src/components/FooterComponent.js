import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road <br />
              Clear Water Bay, Kowloon <br />
              HONG KONG <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678 <br />
              <i className="fa fa-fax fa-lg"></i>: +852 1234 5678 <br />
              <i className="fa fa-envelope fa-lg"></i>:
              <a href="mailto:confution@food.net"> confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a href="https://google.com" className="btn">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="https://facebook.com" className="btn">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://linkedin.com" className="btn">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" className="btn">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://youtube.com" className="btn">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="mailto:" className="btn">
                <i className="fa fa-envelop fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
