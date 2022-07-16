import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { NavbarToggler } from "reactstrap";
import Logo from "../assets/images/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => toggleNav()}></NavbarToggler>
          <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
          <img src={Logo} alt="logo" height="30" />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"> Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info fa-lg"> About us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"> Menu</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  <span className="fa fa-address-card fa-lg"> Contact us</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>
                We take inspiration from the world's best fusion experience. Our
                lipsmacking creations will tickle your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;
