import { CitySelector } from "../CitySelector";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CitySelector", () => {
  const cities = ["London", "Toronto", "Singapore"];

  it("renders all cities", () => {
    render(
      <CitySelector
        cities={cities}
        selectedCity="Toronto"
        onChange={() => {}}
      />
    );

    cities.forEach((city) => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });

  it("calls onChange with selected city", () => {
    const onChange = vi.fn();
    render(
      <CitySelector cities={cities} selectedCity="London" onChange={onChange} />
    );

    fireEvent.click(screen.getByText("Singapore"));
    expect(onChange).toHaveBeenCalledWith("Singapore");
  });

  it("applies selected class to active city", () => {
    render(
      <CitySelector cities={cities} selectedCity="London" onChange={() => {}} />
    );

    const selectedButton = screen.getByText("London");
    expect(selectedButton).toHaveClass("active");
  });
});
