import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IntroVideo from "./IntroVideo";
import WhatWeDo from "./WhatWeDo";
import FAQ from "./FAQ";
import Contact from "./Contact";
import "./FrontPage.css";

class FrontPage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  smoothScroll = e => {
    e.scrollIntoView({ behaviour: "smooth" });
  };

  render() {
    const isAuthenticated = this.props.auth.isAuthenticated;
    return (
      <div data-spy="scroll" data-target="navbar" data-off>
        {isAuthenticated === null || isAuthenticated === false ? (
          <div>
            <IntroVideo />
            <WhatWeDo />
            <FAQ />
            <Contact />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(FrontPage);
