import type { Weather } from "../entities/Weather";

export interface WeatherRepository {
  getForecast(city: string, lang: "en" | "es"): Promise<Weather[]>;
}
