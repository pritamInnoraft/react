import React, { Component } from "react";
import { connect } from "react-redux";
import { loadWeather } from "./actions";
import { getWeather } from "./selectors";
import { createStructuredSelector } from "reselect";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: ""
    };
  }
  componentDidMount() {}

  kelVinToCelcius(K){
    return (K-273.15)
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop:10
        }}
      >
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.fetchWeather(this.state.cityName);
            }}
          >
            <input
              placeholder={"Enter your city"}
              style={{ height: 30, borderWidth: 1, borderRadius: 5 }}
              onChange={e => {
                this.setState({ cityName: e.target.value });
              }}
              value={this.state.cityName}
            />
          </form>
        </div>
        <div>
          {this.props.weatherData ? (
            <p>Temp: {this.kelVinToCelcius(this.props.weatherData.main.temp)}</p>
          ) : (
            <p />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  weatherData: getWeather()
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: data => dispatch(loadWeather(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
