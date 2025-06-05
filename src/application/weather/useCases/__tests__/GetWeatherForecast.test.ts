import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Weather } from "@/domain/weather/entities/Weather";
import { GetWeatherForecast } from "../GetWeatherForecast";
import type { WeatherRepository } from "@/domain/weather/repositories/WeatherRepository";

const mockWeatherRepository: WeatherRepository = {
  getForecast: vi.fn(),
};

describe("GetWeatherForecast Use Case", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call repository.getForecast with the correct city and language", async () => {
    const getWeatherForecast = new GetWeatherForecast(mockWeatherRepository);
    const city = "London";
    const lang = "en";

    const mockForecastData: Weather[] = [
      {
        city: "London",
        temperature: 288.7,
        description: "light rain",
        icon: "10d",
        min: 288.7,
        max: 288.81,
        dateTime: "2025-06-05 18:00:00",
      },
    ];

    (
      mockWeatherRepository.getForecast as ReturnType<typeof vi.fn>
    ).mockResolvedValue(mockForecastData);

    await getWeatherForecast.execute(city, lang);

    expect(mockWeatherRepository.getForecast).toHaveBeenCalledTimes(1);
    expect(mockWeatherRepository.getForecast).toHaveBeenCalledWith(city, lang);
  });

  it("should return the forecast data from the repository", async () => {
    const getWeatherForecast = new GetWeatherForecast(mockWeatherRepository);
    const city = "Paris";
    const lang = "es";

    const expectedForecast: Weather[] = [
      {
        city: "Canada",
        temperature: 288.7,
        description: "light rain",
        icon: "10d",
        min: 288.7,
        max: 288.81,
        dateTime: "2025-06-05 18:00:00",
      },
    ];
    (
      mockWeatherRepository.getForecast as ReturnType<typeof vi.fn>
    ).mockResolvedValue(expectedForecast);

    const result = await getWeatherForecast.execute(city, lang);

    expect(result).toEqual(expectedForecast);
  });

  it("should handle errors from the repository", async () => {
    const getWeatherForecast = new GetWeatherForecast(mockWeatherRepository);
    const city = "Berlin";
    const lang = "en";
    const errorMessage = "Network Error";

    (
      mockWeatherRepository.getForecast as ReturnType<typeof vi.fn>
    ).mockRejectedValue(new Error(errorMessage));

    // We expect the execute method to throw an error if the repository throws an error
    await expect(getWeatherForecast.execute(city, lang)).rejects.toThrow(
      errorMessage
    );
    expect(mockWeatherRepository.getForecast).toHaveBeenCalledWith(city, lang);
  });
});
