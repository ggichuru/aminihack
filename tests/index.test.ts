import { GetElevation } from "../src/helpers";
import { GetAll } from "../src/helpers/GetAll";
import { GetTemperature } from "../src/helpers/GetTemperature";
import { GetTime } from "../src/helpers/GetTime";

describe("My package", () => {
  it("should get temperature", async () => {
    const temperature = await GetTemperature(51.5074, -0.1278); // Coordinates for London
    expect(temperature).not.toBeNull();
    expect(typeof temperature).toBe("number");
  });

  it("should get elevation", async () => {
    const elevation = await GetElevation(40.7128, -74.006); // Coordinates for New York
    expect(elevation).not.toBeNull();
    expect(typeof elevation).toBe("number");
  });

  it("should get time", async () => {
    const time = await GetTime();
    expect(time).not.toBeNull();
    expect(typeof time).toBe("string");
  });

  it("should get all", async () => {
    const all = await GetAll(40.7128, -74.006); // Coordinates for New York
    expect(all).not.toBeNull();
    expect(typeof all).toBe("object");
    expect(all).toHaveProperty("temperature");
    expect(all).toHaveProperty("elevation");
    expect(all).toHaveProperty("time");
  });
});
