import OptionBox from "../common/OptionBox";
import { WeatherApiType } from "@/types/weatherApi";
import Image from "next/image";
import useLocation from "@/hooks/useLocation";
import useWeather from "@/hooks/useWeather";

const TodayWeather = ({
  weatherData: initialWeatherData,
}: {
  weatherData: WeatherApiType | null;
}) => {
  const location = useLocation();
  const fetchedWeatherData = useWeather(location);

  const finalWeatherData = fetchedWeatherData || initialWeatherData;

  const getClosestWeather = (weatherList: WeatherApiType["list"]) => {
    const now = Math.floor(Date.now() / 1000);
    return weatherList.reduce((prev, curr) => {
      return Math.abs(curr.dt - now) < Math.abs(prev.dt - now) ? curr : prev;
    });
  };

  const currentWeather = finalWeatherData?.list
    ? getClosestWeather(finalWeatherData.list)
    : null;

  const convertUnixToTime = (unixTime: number) => {
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <div className="h-44 flex flex-col justify-center items-center">
        <div className="h-20 py-1 flex justify-center items-center gap-4 ">
          <div className="w-15 h-15 flex justify-center items-center rounded-full text-black bg-white">
            {currentWeather?.weather?.[0]?.icon ? (
              <Image
                src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                alt="날씨 아이콘"
                width={50}
                height={50}
                unoptimized
              />
            ) : (
              "..."
            )}
          </div>
          <div className="flex justify-center items-center bg-white text-black rounded-xl px-4 py-2">
            <span className="font-bold text-4xl">
              {currentWeather ? `${currentWeather.main.temp}˚` : "불러오는 중"}
            </span>
          </div>
        </div>
        <div className="h-20 flex gap-4 justify-center items-center text-black font-bold">
          <span className="text-white">
            체감온도:
            {currentWeather
              ? `${Math.floor(currentWeather.main.feels_like)}˚`
              : "불러오는 중"}
          </span>
        </div>
      </div>
      <div className="w-full px-4 flex">
        <div className="w-1/4 flex justify-center">
          <OptionBox
            title="강수확률"
            content={
              currentWeather?.pop && currentWeather.pop > 0 ? "비옴" : "비안옴"
            }
            bg="#2995EE"
            titleFontSize="sm"
            contentFontSize="xl"
          />
        </div>
        <div className="w-1/4 flex justify-center">
          <OptionBox
            title="습도"
            content={`${currentWeather?.main.humidity || 0}%`}
            bg="#A593E0"
            titleFontSize="sm"
            contentFontSize="xl"
          />
        </div>
        <div className="w-1/4 flex justify-center">
          <OptionBox
            title="일출"
            content={
              finalWeatherData?.city?.sunrise
                ? convertUnixToTime(finalWeatherData.city.sunrise)
                : "정보 없음"
            }
            bg="#eb3d00"
            titleFontSize="sm"
            contentFontSize="base"
          />
        </div>
        <div className="w-1/4 flex justify-center">
          <OptionBox
            title="일몰"
            content={
              finalWeatherData?.city?.sunset
                ? convertUnixToTime(finalWeatherData.city.sunset)
                : "정보 없음"
            }
            bg="#db2777"
            titleFontSize="sm"
            contentFontSize="base"
          />
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
