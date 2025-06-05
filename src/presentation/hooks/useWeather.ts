import { useEffect, useState } from "react";
import { GetWeatherForecast } from "@/application/weather/useCases/GetWeatherForecast";
import { WeatherApiRepository } from "@/infrastructure/weather/WeatherApiRepository";
import type { Weather } from "@/domain/weather/entities/Weather";

export const useWeather = (city: string, lang: "en" | "es") => {
  const [forecast, setForecast] = useState<Weather[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);

      const repo = new WeatherApiRepository();
      const useCase = new GetWeatherForecast(repo);

      try {
        const result = await useCase.execute(city, lang);
        setForecast(result);
      } catch {
        setError("Could not fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [city, lang]);

  return { forecast, loading, error };
};
