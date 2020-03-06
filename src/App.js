import React from 'react';
import Info from "./component/Info";
import Form from "./component/Form";
import Weather from "./component/Weather";

 const API_KEY = "70eled322b02abc57d443dd91065f3e"

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  if (city){
  const api_url = await
  fetch(`http://api.openweathermap.org/data/2.5/weather=${API_KEY}`);
  const data = await api_url.json();
  console.log(data);
  this.setState ({
s      temp: data.main.temp,
     // city: data.name,
     // country:data.sys.country,
     // sunrise:data.sys.sunrise,
     // sunset:data.sys.sunset,
     // error: undefined,
  });



  }
}

  render () {
    return (
    <div className="wrapper">
    <div className="main">
    <div className="container">
    <div className="row">
    <div className="col-sm-5 info">
    <Info/>
    </div>



    <div className="col-sm-7 form">
    <Form Method={this.gettingWeather} />
    <Weather
    temp={this.state.temp}
    city={this.state.city}
    country={this.state.country}
    sunrise={this.state.sunrise}
    sunset={this.state.sunset}
    error={this.state.error}
    />
          </div>
        </div>
    </div>
    </div>
  </div>
  );
  }
}

export default App;
