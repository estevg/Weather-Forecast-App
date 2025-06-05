import i18n from "@/shared/i18n";
import { describe, expect, it } from "vitest";
import { I18nextProvider } from "react-i18next";
import { render, screen } from "@testing-library/react";
import type { Weather } from "@/domain/weather/entities/Weather";
import { WeatherTable } from "@/presentation/components/WeatherTable";

const mockForecast: Weather[] = [
  {
    city: "Toronto",
    temperature: 22.5,
    description: "clear sky",
    icon: "01d",
    min: 20.1,
    max: 25.3,
    dateTime: "2025-06-05 15:00:00",
  },
];

describe("WeatherTable", () => {
  it("renders the forecast data correctly", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <WeatherTable forecast={mockForecast} />
      </I18nextProvider>
    );

    expect(screen.getByText("clear sky")).toBeInTheDocument();
    expect(screen.getByText("22.5°C")).toBeInTheDocument();
    expect(screen.getByText("2025-06-05 15:00:00")).toBeInTheDocument();
  });
});
