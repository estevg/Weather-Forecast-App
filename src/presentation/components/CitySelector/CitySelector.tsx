import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button/Button";

type Props = {
  cities: string[];
  selectedCity: string;
  onChange: (city: string) => void;
};

export const CitySelector = ({ cities, selectedCity, onChange }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="city-selector">
      <h2>{t("app.selectCity")}</h2>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Button
              onClick={() => onChange(city)}
              variant="outline"
              active={selectedCity === city}
            >
              {city}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};
