import React from "react";

const Card = ({ tempinfo }) => {
  const [weatherState, setweatherState] = React.useState("wi-day-haze");

  const {
    humidity,
    pressure,
    temp,
    weatherMood,
    sunset,
    country,
    name,
    speed,
  } = tempinfo;

  React.useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setweatherState("wi-day-cloudy");
          break;
        case "Rain":
          setweatherState("wi-rain");
          break;
        case "Haze":
          setweatherState("wi-fog");
          break;
        case "Clear":
          setweatherState("wi-day-sunny");
          break;
          case "Mist":
            setweatherState("wi-dust");
            break;
        default:
          setweatherState("wi-day-haze")
          break;
      }
    }
  }, [weatherMood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">
              {weatherMood}
              <div className="place">
                {name} , {country}
              </div>
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        {/* 4 box */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={`wi wi-sunset`}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} pM
                <br /> Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} Pa
                <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} mph
                <br />
                Wind
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
