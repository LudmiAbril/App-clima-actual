import React from "react";
import {
  WiCloudy,
  WiDaySunny,
  WiFog,
  WiRain,
  WiRainMix,
  WiSnow,
  WiThunderstorm,
  WiStrongWind,
  WiTornado,
  WiSmoke,
  WiDust,
  WiVolcano,
  WiNA,
} from "weather-icons-react";


export function WeatherIcon({ weatherDesc, size }) {
  switch (weatherDesc) {
    case "Clear":
      return <WiDaySunny size={size} />;
    case "Rain":
      return <WiRain size={size} />;
    case "Clouds":
      return <WiCloudy size={size} />;
    case "Thunderstorm":
      return <WiThunderstorm size={size} />;
    case "Drizzle":
      return <WiRainMix size={size} />;
    case "Snow":
      return <WiSnow size={size} />;
    case "Fog", "Mist", "Haze":
      return <WiFog size={size} />;
    case "Squall":
      return <WiStrongWind size={size} />;
    case "Tornado":
      return <WiTornado size={size} />;
    case "Smoke":
      return <WiSmoke size={size} />;
    case "Dust", "Sand":
      return <WiDust size={size} />;
    case "Ash":
      return <WiVolcano size={size} />;

    default:
      return <WiNA size={size} />;
  }
}
