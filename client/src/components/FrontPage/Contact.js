import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section className="background-dark" id="Contact">
          <div className="background-dark text-left container-md p-5 text-center">
            <h2 className="p-1">Contact Us</h2>
            <p>
              <i>Find Out More About Us</i>
            </p>
            <div className="row">
                <div className="col">
                    <p>London, UK</p>
                    <p>Phone</p>
                    <p>Email</p>
                </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
