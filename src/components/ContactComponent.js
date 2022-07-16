import React from "react";

const Contact = (props) => {
  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road <br />
            Clear Water Bay, Kowloon <br />
            HONG KONG <br />
            <i className="fa fa-phone"></i>: +852 1234 5678 <br />
            <i className="fa fa-fax"></i>: +852 1234 5678 <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confution@food.net">confution@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              href="tel:+852 1234 5678"
              className="btn btn-primary"
            >
              <i className="fa fa-phone"> Call</i>
            </a>
            <a role="button" href="/" className="btn btn-info">
              <i className="fa fa-skype"> Skype</i>
            </a>
            <a
              role="button"
              href="mailto:confution@food.net"
              className="btn btn-success"
            >
              <i className="fa fa-envelope"></i> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
