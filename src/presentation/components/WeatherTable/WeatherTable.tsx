import { Weather } from "@/domain/weather/entities/Weather";
import { formatDateTime, capitalize } from "@/shared/utils";
import { useTranslation } from "react-i18next";

type Props = {
  forecast: Weather[];
};

export const WeatherTable = ({ forecast }: Props) => {
  const { t, i18n } = useTranslation();

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
          {forecast.map((entry, index) => (
            <tr key={index}>
              <td>{formatDateTime(entry.dateTime, i18n.language)}</td>
              <td>
                <img
                  src={`https://openweathermap.org/img/wn/${entry.icon}@2x.png`}
                  alt={entry.description}
                  width={40}
                  height={40}
                />
              </td>
              <td>{capitalize(entry.description)}</td>
              <td>{entry.temperature.toFixed(1)}°C</td>
              <td>{entry.min.toFixed(1)}°C</td>
              <td>{entry.max.toFixed(1)}°C</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
