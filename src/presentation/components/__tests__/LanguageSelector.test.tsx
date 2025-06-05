import i18n from "@/shared/i18n";
import { I18nextProvider } from "react-i18next";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageSelector } from "@/presentation/components/LanguageSelector";

describe("LanguageSelector", () => {
  it("renders language buttons", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>
    );

    expect(screen.getByText("EN")).toBeInTheDocument();
    expect(screen.getByText("ES")).toBeInTheDocument();
  });

  it("changes the language when a button is clicked", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>
    );

    fireEvent.click(screen.getByText("ES"));
    expect(i18n.language).toBe("es");

    fireEvent.click(screen.getByText("EN"));
    expect(i18n.language).toBe("en");
  });
});
