import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isNavOpen: false };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md" sticky="top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="50"
                width="50"
                alt="Black Pearl"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link  " to="/home">
                    <span className="fa fa-home fa-lg"> Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"> About Us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"> Menu</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-adress-card fa-lg">Contact Us</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-Header"></div>
            <div className="col-12 col-sm-6">
              <h1>Black Pearl</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
export default Header;
