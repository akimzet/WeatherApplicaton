/* Import statements */
import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errors: {},
      isLoaded: false,
      zipcode: "",
      ApiKey: "07b0b99ee5bbcb0d401b7a635a2433ec"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ zipcode: event.target.value });
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};
    if (this.state.zipcode.length !== 5) {
      errors.title = "Zipcode must have 5 digits";
      formIsValid = false;
      this.props.data(null);
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.courseFormIsValid()) {
      return;
    }
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${
        this.state.zipcode
      },us&appid=${this.state.ApiKey}`
    )
      .then(response => response.json())
      .then(
        result => {
          if (result.cod === "404") {
            let errors = {};
            errors.title = "Zipcode must exist";
            this.setState({ errors: errors });
            this.props.data(null);
            return;
          }
          this.props.data(result);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    //
  }

  render() {
    return (
      <form className="FormCard" onSubmit={this.handleSubmit}>
        <div className="input-group col-sm-3">
          <input
            type="text"
            className="form-control"
            placeholder="Zip Code"
            id="zipcode"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">
              Enter
            </button>
          </div>
        </div>
        {this.state.errors.title && (
          <div className="alert alert-danger">{this.state.errors.title}</div>
        )}
      </form>
    );
  }
}

export default FormInput;
