import axios from "axios";
import { API_KEY, BASE_FORECAST_URL } from "@/shared/config/env";
import type { OpenWeatherForecastResponse } from "@/shared/type/openWeather.types";

export const fetchWeatherForecast = async (
  city: string,
  lang: "en" | "es"
): Promise<OpenWeatherForecastResponse> => {
  try {
    const response = await axios.get<OpenWeatherForecastResponse>(
      BASE_FORECAST_URL,
      {
        params: {
          q: city,
          lang,
          appid: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
