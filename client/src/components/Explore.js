import React, { Component } from "react";
import introVideo from "../assets/intro_page.mp4";
import PropTypes from "prop-types";
import "./FrontPage.css";

class FrontPage extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  smoothScroll = e => {
    e.scrollIntoView({ behaviour: "smooth" });
  };

  render() {
    return (
      <header className="mb-4">
        {/* {this.props.isAuthenticated ? ( */}
        <main className="container-fluid">
          <div className="container-md">
            <div
              className="w3-container w3-content w3-center w3-padding-64"
              style="max-width:800px"
              id="band"
            >
              <h2 className="w3-wide" style="font-family: 'Oswald', sans-serif;">
                Royal Education
              </h2>
              <p className="w3-opacity">
                <i>Choose Where to Go</i>
              </p>
              <a
                className="w3-display-container w3-col alt-box"
                style="height: 200px;
    margin: 5px;
    border: 1px solid black;
    background-color: khaki;
    border-radius: 2px;
    line-height: 200px;
    "
                href="weekly.php"
              >
                Weekly Videos
              </a>
              <a
                className="w3-display-container w3-third alt-box"
                style="height: 200px;
    margin: 5px 5px 5px 10px;
    border: 1px solid black;
    background-color: khaki;
    border-radius: 2px;
    line-height: 200px;
  width: 32%;
    
    "
                href="basic.php"
              >
                Basic
              </a>
              <a
                className="w3-display-container w3-third alt-box"
                style="height: 200px;
    margin: 5px;
    border: 1px solid black;
    background-color: khaki;
    border-radius: 2px;
    line-height: 200px;
    width: 32%;
    "
                href="basic.php"
              >
                Intermediate
              </a>
              <a
                className="w3-display-container w3-third alt-box"
                style="height: 200px;
    margin: 5px 5px 5px 0px;
    border: 1px solid black;
    background-color: khaki;
    border-radius: 2px;
    line-height: 200px;
    width: 32%;
    "
                href="basic.php"
              >
                Advanced
              </a>
              <a
                className="w3-display-container w3-half alt-box"
                style="height: 200px;
    margin: 5px 5px 5px 15px;
    border: 1px solid black;
    background-color: khaki;
    border-radius: 2px;
    line-height: 200px;
    width: 48%;
    "
                href="basic.php"
              >
                Kevin's strategy
              </a>
              <a
                className="w3-display-container w3-half alt-box"
                style="height: 200px;
    margin: 5px;
    border: 1px solid black;
    background-color: khaki;
    border-radius: 2px;
    line-height: 200px;
    width: 48%;
    "
                href="basic.php"
              >
                Ishmael's Strategy
              </a>
              <a
                className="w3-display-container w3-col alt-box"
                style="height: 200px;
    margin: 5px;
    border: 1px solid black;
    background-color: khaki;
    border-radius: 2px;
    line-height: 200px;
    "
                href="basic.php"
              >
                Institutional Training
              </a>
            </div>
          </div>
        </main>
        {/* ) : null} */}
      </header>
    );
  }
}

export default FrontPage;
