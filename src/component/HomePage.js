import React from "react";
import FormInput from "./FormInput";
import DisplayWeatherData from "./DisplayWeatherData";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  handleData = childData => {
    this.setState({ data: childData });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Zip Code</h1>
          <FormInput data={this.handleData} />
        </div>
        <DisplayWeatherData data={this.state.data} />
        <footer className="py-3 bg-dark" id="footer">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Weather Forecast 2018
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
