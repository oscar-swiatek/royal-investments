import React, { Component } from 'react';
import introVideo from "../../assets/intro_page.mp4";

export default class IntroVideo extends Component {
    render() {
        return (
          <div>
            <header style={{ top: -50 + "px" }}>
              <div className="overlay">
                <video playsInline autoPlay muted loop>
                  <source src={introVideo} type="video/mp4" />
                </video>
                <div className="container h-100">
                  <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                      <h1 className="display-3">Video Header</h1>
                      <p className="lead mb-0">Subtitle</p>
                    </div>
                  </div>
                </div>
                <section className="my-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 mx-auto"></div>
                    </div>
                  </div>
                </section>
              </div>
            </header>
          </div>
        );
    }
}
