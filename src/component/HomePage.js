import React from "react";
import FormInput from "./FormInput";
import DisplayData from "./DisplayData";

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

  renderInput() {
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1>Address</h1>
        <FormInput data={this.handleData} />
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.data === null ? this.renderInput() : null}

        <div>
          <DisplayData data={this.state.data} />
        </div>
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
