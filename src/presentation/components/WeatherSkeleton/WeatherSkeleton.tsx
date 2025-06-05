import { useTranslation } from "react-i18next";
import "./WeatherSkeleton.css";

export const WeatherSkeleton = () => {
  const { t } = useTranslation();

  return (
    <div className="table-container">
      <table className="weather-table">
        <thead>
          <tr>
            <th>{t("app.time")}</th>
            <th>{t("app.icon")}</th>
            <th>{t("app.description")}</th>
            <th>{t("app.temperature")}</th>
            <th>{t("app.min")}</th>
            <th>{t("app.max")}</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 40 }).map((_, index) => (
            <tr key={index}>
              {Array.from({ length: 6 }).map((__, cell) => (
                <td key={cell}>
                  <div className="skeleton-line" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
