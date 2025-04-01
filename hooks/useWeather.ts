"use client";
import { useEffect, useState } from "react";
import { WeatherApiType } from "@/types/weatherApi";

const useWeather = (location: { lat: number; lon: number } | null) => {
  const [weatherData, setWeatherData] = useState<WeatherApiType | null>(null);

  useEffect(() => {
    if (location) {
      fetch("/api/get-weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location),
      })
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.error(error, "날씨 데이터 못 받아옴"));
    }
  }, [location]);

  return weatherData;
};

export default useWeather;
