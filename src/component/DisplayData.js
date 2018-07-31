import React from "react";
import windImage from "../Images/wind.png";
import pollutionImage from "../Images/pollution.png";
import AQIChart from "../Images/AQIChart.png";

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }

  KelvinToFahrenheit(Celsius) {
    let celsius = parseInt(Celsius, 10);
    let fahrenheit = (celsius * (9.0 / 5.0) + 32.0).toFixed(0);
    return fahrenheit.toString();
  }

  ParseData(Date) {
    let year = Date.substr(0, 4);
    let month = Date.substr(5, 2);
    let day = Date.substr(8, 2);
    let date = `${month}/${day}/${year}`;
    return date;
  }

  imgDesc(Code) {
    switch (Code) {
      case "01d":
        return "Clear Sky (Day)";
      case "01n":
        return "Clear Sky (Night)";
      case "02d":
        return "Few Clouds (Day)";
      case "02n":
        return "Few Clouds (Night)";
      case "03d":
        return "Scattered Clouds (Day)";
      case "04d":
        return "Broken Clouds";
      case "09d":
        return "Shower Rain";
      case "10d":
        return "Rain (Day)";
      case "10n":
        return "Rain (Night)";
      case "11d":
        return "Thunderstorm";
      case "13d":
        return "Snow";
      case "50d":
        return "Mist";
      default:
        return "";
    }
  }

  pollutantDesc(Code) {
    switch (Code) {
      case "p1":
        return "Particulate Matter 10mm";
      case "p2":
        return "Particulate Matter 2.5mm";
      case "o3":
        return "Ozone O3";
      case "n2":
        return "Nitrogen Dioxide NO2";
      case "s2":
        return "Sulfure Dioxide SO2";
      case "co":
        return "Carbon Monoxide CO";
      default:
        return "";
    }
  }

  renderAll() {
    const image = require("../Images/" +
      this.state.data.data.current.weather.ic +
      ".png");
    return (
      <div>
        <header className="data-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="display-12 text-center">
                  {this.ParseData(this.state.data.data.current.weather.ts)}
                </h1>
                <h2 className="display-12 text-center">
                  {this.state.data.data.city}, {this.state.data.data.state},{" "}
                  {this.state.data.data.country}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-12">
                <div className="card item-wr">
                  <img className="card-img-top" src={image} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {this.imgDesc(this.state.data.data.current.weather.ic)}
                    </h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Temperature:{" "}
                      {this.KelvinToFahrenheit(
                        this.state.data.data.current.weather.tp
                      )}
                      &#8457;
                    </li>
                    <li className="list-group-item">
                      Humidity: {this.state.data.data.current.weather.hu}%
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-12">
                <div className="card item-wr">
                  <img
                    className="card-img-top"
                    src={windImage}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Wind</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Wind Speed: {this.state.data.data.current.weather.ws}m/s
                    </li>
                    <li className="list-group-item">
                      Wind Direction: {this.state.data.data.current.weather.wd}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-12">
                <div className="card item-wr">
                  <img
                    className="card-img-top"
                    src={pollutionImage}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Air Quality</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Air Quality Index:{" "}
                      {this.state.data.data.current.pollution.aqius}
                    </li>
                    <li className="list-group-item">
                      Main Pollutant :{" "}
                      {this.pollutantDesc(
                        this.state.data.data.current.pollution.mainus
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card col-sm-12">
              <div className="aqichart">
                <img src={AQIChart} alt="Chart" />
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

export default DisplayData;
