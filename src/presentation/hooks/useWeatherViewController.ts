import { driver } from "driver.js";
import { useWeather } from "./useWeather";
import { useLanguage } from "./useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const cities = ["London", "Toronto", "Singapore"];
type City = (typeof cities)[number];

export const useWeatherViewController = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<City>("London");
  const { forecast, loading, error } = useWeather(
    selectedCity,
    currentLanguage
  );

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("weather-tour-completed");

    if (hasSeenTour === "true") return;

    const driverObj = driver({
      showProgress: true,
      nextBtnText: t("app.next"),
      prevBtnText: t("app.prev"),
      doneBtnText: t("app.done"),
      progressText: t("app.tour.progress"),
      steps: [
        {
          element: '[data-tour="language-selector"]',
          popover: {
            title: t("app.tour.language.title"),
            description: t("app.tour.language.description"),
          },
        },
        {
          element: '[data-tour="city-selector"]',
          popover: {
            title: t("app.tour.city.title"),
            description: t("app.tour.city.description"),
          },
        },
        {
          element: '[data-tour="weather-table"]',
          popover: {
            title: t("app.tour.table.title"),
            description: t("app.tour.table.description"),
          },
        },
      ],
      onDestroyed: () => {
        localStorage.setItem("weather-tour-completed", "true");
      },
    });

    driverObj.drive();
  }, [t]);

  return {
    t,
    error,
    loading,
    forecast,
    selectedCity,
    currentLanguage,
    setSelectedCity,
  };
};
