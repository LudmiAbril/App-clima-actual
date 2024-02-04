import React, { useState, useEffect } from "react";
import { CityForm } from "./form";
import { SyncLoader } from "react-spinners";
import { Card } from "react-bootstrap";
import {
  WiCloudDown,
  WiCloudUp,
  WiRaindrop,
  WiThermometer,
} from "weather-icons-react";
import { WeatherIcon } from "./weatherIcon";

export function WeatherInfo() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const apiKey = "21571150a4f1ee576053384efc81a15f";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city.trim() === "") {
          // Si la ciudad está vacía, no realizar la solicitud
          setLoading(false);
          setError(null);
          setWeatherData(null);
          return;
        }

        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setError(null);
        } else {
          setError("Ciudad no encontrada. Por favor, verifica el nombre de la ciudad.");
          setWeatherData(null);
        }
      } catch (error) {
        setError("Se produjo un error al obtener los datos meteorológicos.");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, apiKey]);

  const cityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
      <div className="mx-auto text-center ">
        <CityForm cityChange={cityChange} />
        {loading ? (
          <SyncLoader className="mt-5" size={10} />
        ) : error ? (
          <p className="mt-5">{error}</p>
        ) : weatherData && weatherData.main ? (
          <Card className="mx-auto mt-5" style={{ width: "300px" }}>
            <Card.Body>
              <Card.Subtitle>
                <p>{weatherData.name}, ahora.</p>
              </Card.Subtitle>
              <div className="d-flex flex-column justify-content-between">
                <Card.Title className=" ">
                  <WeatherIcon
                    weatherDesc={weatherData.weather[0].main}
                    size={100}
                  />
                  <Card.Subtitle
                    className="text-muted"
                    style={{ fontSize: "20px" }}
                  >
                    {weatherData.weather[0].description}
                  </Card.Subtitle>
                </Card.Title>

                <div>
                  <Card.Title>
                    <p style={{ fontSize: "30px" }}>
                      {weatherData.main.temp}°C
                    </p>
                  </Card.Title>

                  <Card.Text className="mt-1">
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <p>
                        <WiCloudUp size={20} /> max: {weatherData.main.temp_max}
                        °
                      </p>
                      <p>
                        <WiCloudDown size={20} /> min:{" "}
                        {weatherData.main.temp_min}°
                      </p>
                    </div>

                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <p>
                        <WiThermometer size={20} /> st:{" "}
                        {weatherData.main.feels_like}°{" "}
                      </p>
                      <p>
                        <WiRaindrop size={20} /> hum:{" "}
                        {weatherData.main.humidity}%
                      </p>
                    </div>
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        ) : (
          <p className="mt-5">No se ingresó ninguna ciudad.</p>
        )}
      </div>
    </>
  );
}

