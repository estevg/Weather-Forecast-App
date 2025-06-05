import { useLanguage } from "@/presentation/hooks/useLanguage";
import { Button } from "../ui/Button/Button";

export const LanguageSelector = () => {
  const { changeLanguage, isActive } = useLanguage();

  return (
    <nav aria-label="Language selector">
      <ul className="language-selector">
        {["en", "es"].map((lang) => (
          <li key={lang}>
            <Button
              onClick={() => changeLanguage(lang as "en" | "es")}
              variant="outline"
              active={isActive(lang as "en" | "es")}
            >
              {lang.toUpperCase()}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
