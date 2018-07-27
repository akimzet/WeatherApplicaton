/* Import statements */
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
/* Import components */
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import "../styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            Weather Forecast
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active" />
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
