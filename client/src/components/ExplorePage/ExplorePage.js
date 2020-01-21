import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Weekly from "./Weekly";

class ExplorePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <section className="container-fluid">
            <Switch>
              <Route exact path="/weekly" component={Weekly} />
            </Switch>
          </section>
        </Router>
      </React.Fragment>
    );
  }
}

export default ExplorePage;
