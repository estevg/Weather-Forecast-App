import { Button } from "../ui/Button";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("renders with default styles", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies 'active' and 'outline' classes", () => {
    render(
      <Button variant="outline" active>
        Active
      </Button>
    );

    const btn = screen.getByText("Active");
    expect(btn).toHaveClass("btn");
    expect(btn).toHaveClass("outline");
    expect(btn).toHaveClass("active");
  });
});
