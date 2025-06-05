import { fetchWeatherForecast } from "./weatherApi";
import { Weather } from "@/domain/weather/entities/Weather";
import type { ForecastItem } from "@/shared/type/openWeather.types";
import type { WeatherRepository } from "@/domain/weather/repositories/WeatherRepository";

export class WeatherApiRepository implements WeatherRepository {
  async getForecast(city: string, lang: "en" | "es"): Promise<Weather[]> {
    const rawData = await fetchWeatherForecast(city, lang);

    return rawData.list.map((item: ForecastItem) => {
      return new Weather(
        city,
        item.main.temp,
        item.weather[0].description,
        item.weather[0].icon,
        item.main.temp_min,
        item.main.temp_max,
        item.dt_txt
      );
    });
  }
}
