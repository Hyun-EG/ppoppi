export type WeatherApiType = {
  city: {
    name: string;
    sunrise: number;
    sunset: number;
  };
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
    rain?: {
      "1h": number;
    };
    pop: number;
  }>;
};
