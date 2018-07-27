import React from "react";

class DisplayWeatherData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }

  KelvinToFahrenheit(Kelvin) {
    let kelvin = parseInt(Kelvin, 10);
    let fahrenheit = (kelvin * (9.0 / 5.0) - 459.67).toFixed(0);
    return fahrenheit.toString();
  }

  renderAll() {
    return (
      <div>
        <header className="weather-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="display-12 text-center text-white mt-4">
                  {this.state.data.name}, {this.state.data.sys.country}
                </h1>
              </div>
              <div className="col-sm-6">
                <h1 className="display-6 text-left text-white mt-1">
                  Temperature:{" "}
                  {this.KelvinToFahrenheit(this.state.data.main.temp)} F
                </h1>
                <h1 className="display-6 text-left text-white mt-1">
                  Pressure: {this.state.data.main.pressure} atm
                </h1>
                <h1 className="display-6 text-left text-white mt-1">
                  Humidity: {this.state.data.main.humidity}%
                </h1>
                <h1 className="display-6 text-left text-white mt-1">
                  Weather: {this.state.data.weather[0].main}
                </h1>
              </div>
              <div className="col-sm-6">
                <h1 className="display-6 text-right text-white mt-1">
                  Cloudiness: {this.state.data.clouds.all}%
                </h1>
                <h1 className="display-6 text-right text-white mt-1">
                  Wind Speed: {this.state.data.wind.speed} mph
                </h1>
                <h1 className="display-6 text-right text-white mt-1">
                  Wind Direction: {this.state.data.wind.deg}
                </h1>
                <h1 className="display-6 text-right text-white mt-1">
                  Visibility: {this.state.data.visibility} meters
                </h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

  render() {
    return this.state.data === null ? null : this.renderAll();
  }
}

export default DisplayWeatherData;
