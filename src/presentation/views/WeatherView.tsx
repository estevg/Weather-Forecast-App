import "./WeatherView.css";
import {
  CitySelector,
  WeatherTable,
  WeatherSkeleton,
  LanguageSelector,
} from "../components";
import {
  cities,
  useWeatherViewController,
} from "../hooks/useWeatherViewController";

export const WeatherView = () => {
  const { error, forecast, loading, selectedCity, setSelectedCity, t } =
    useWeatherViewController();

  return (
    <main className="weather-container">
      <header className="weather-header" data-tour="language-selector">
        <LanguageSelector />
      </header>

      <h1 className="weather-title">{t("app.title")}</h1>

      <div data-tour="city-selector">
        <CitySelector
          cities={cities}
          selectedCity={selectedCity}
          onChange={setSelectedCity}
        />
      </div>

      <section className="weather-content" data-tour="weather-table">
        {loading ? (
          <WeatherSkeleton />
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <WeatherTable forecast={forecast} />
        )}
      </section>
    </main>
  );
};
