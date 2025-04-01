import TitleBox from "@/components/common/TitleBox";
import WeatherWrapper from "@/components/weather/WeatherWrapper";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <TitleBox>날씨</TitleBox>
      <WeatherWrapper />
    </div>
  );
};

export default page;
