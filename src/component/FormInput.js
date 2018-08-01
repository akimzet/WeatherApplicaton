/* Import statements */
import React from "react";
import toastr from "toastr";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      zipcode: "",
      city: "",
      state: "",
      country: "",
      ApiKey: "KGsj6jfe3ZMwr2tNW"
    };
    this.handleCountry = this.handleCountry.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCountry(event) {
    this.setState({ country: event.target.value });
  }

  handleState(event) {
    this.setState({ state: event.target.value });
  }

  handleCity(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(
      `http://api.airvisual.com/v2/city?city=${this.state.city}&state=${
        this.state.state
      }&country=${this.state.country}&key=${this.state.ApiKey}`
    )
      .then(response => response.json())
      .then(
        result => {
          if (result.status === "success") {
            this.props.data(result);
          } else {
            toastr.error("Address is not valid.");
          }
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
            autoComplete="country-name"
            className="form-control"
            placeholder="Country"
            id="country"
            value={this.state.country}
            onChange={this.handleCountry}
          />
        </div>
        <div className="input-group col-sm-3">
          <input
            type="text"
            autoComplete="address-level2"
            className="form-control"
            placeholder="State"
            id="state"
            value={this.state.state}
            onChange={this.handleState}
          />
        </div>
        <div className="input-group col-sm-3">
          <input
            type="text"
            autoComplete="address-level3"
            className="form-control"
            placeholder="City"
            id="city"
            value={this.state.city}
            onChange={this.handleCity}
          />
        </div>
        <br />
        <div className="input-group-append col-sm-3">
          <button type="submit" className="btn btn-primary">
            Enter
          </button>
        </div>
      </form>
    );
  }
}

export default FormInput;
