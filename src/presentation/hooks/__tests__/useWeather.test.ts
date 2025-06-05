import { renderHook, waitFor } from "@testing-library/react";
import { useWeather } from "@/presentation/hooks/useWeather";

describe("useWeather", () => {
  it("should fetch forecast and update state", async () => {
    const { result } = renderHook(() => useWeather("London", "en"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.forecast.length).toBeGreaterThan(0);
    expect(result.current.error).toBeNull();
  });
});
