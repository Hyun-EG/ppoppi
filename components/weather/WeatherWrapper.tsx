"use client";

import useLocation from "../../hooks/useLocation";
import useWeather from "../../hooks/useWeather";
import TodayWeather from "./TodayWeather";

const WeatherWrapper = () => {
  const location = useLocation();
  const weatherData = useWeather(location);

  return (
    <div className="w-full h-full">
      <div className="h-10 p-2.5">
        <span className="text-xl">
          {weatherData?.city?.name || "위치 정보 없음"}
        </span>
      </div>
      <div className="h-96">
        <div className="h-86">
          <TodayWeather weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default WeatherWrapper;
