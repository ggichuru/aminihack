import { GetElevation } from "./GetElevation";
import { GetTemperature } from "./GetTemperature";
import { GetTime } from "./GetTime";

/**
 * Fetches all available data: temperature, elevation, and time.
 *
 * @param lat - The latitude of the location.
 * @param lng - The longitude of the location.
 * @param city - An optional city name.
 * @returns A Promise that resolves to an object containing `temperature`, `elevation`, and `time`.
 * @example
 * ```typescript
 * const allData = await GetAll(40.7128, -74.0060);
 * ```
 */

export async function GetAll(
  lat: number,
  lng: number,
  city?: string
): Promise<object> {
  const temperature = await GetTemperature(lat, lng);
  const elevation = await GetElevation(lat, lng);
  const time = await GetTime();

  return {
    temperature,
    elevation,
    time,
  };
}
