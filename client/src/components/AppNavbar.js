import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import logo from "../assets/logo.jpeg";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar navbar-expand navbar-text flex-column flex-md-row bd-navbar">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <div id="navbar">
        <Navbar dark expand="sm" className="mb-5 background-dark">
          <Container>
            <NavbarBrand href="/" className="mr-0">
              Royal
            </NavbarBrand>
            <a href="/">
              <img
                src={logo}
                alt="logo"
                style={{ height: 75 + "px", width: 75 + "px" }}
              ></img>
            </a>
            <NavbarBrand href="/" className="ml-0">
              Investments
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Fragment>
                  <NavItem
                    className="ml-2 mt-2 mr-2 background-dark spy"
                    href="#FAQ"
                  >
                    FAQ
                  </NavItem>
                  <NavItem
                    className="ml-2 mt-2 mr-2 background-dark spy"
                    href="#Contact"
                  >
                    Contact Us
                  </NavItem>
                </Fragment>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);
