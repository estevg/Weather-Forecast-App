import type { WeatherRepository } from "@/domain/weather/repositories/WeatherRepository";

export class GetWeatherForecast {
  constructor(private repo: WeatherRepository) {}

  async execute(city: string, lang: "en" | "es") {
    return this.repo.getForecast(city, lang);
  }
}
