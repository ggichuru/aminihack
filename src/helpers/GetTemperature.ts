import axios, { AxiosResponse } from "axios";
import { IWeatherResponse } from "../interfaces";

/**
 * Fetches the current temperature for a given latitude and longitude.
 *
 * @param lat - The latitude of the location.
 * @param lon - The longitude of the location.
 * @returns A Promise that resolves to the current temperature in degrees Celsius, or `null` in case of an error.
 * @example
 * ```typescript
 * const temperature = await GetTemperature(40.7128, -74.0060);
 * ```
 */

export async function GetTemperature(
  lat: number,
  lon: number
): Promise<number | null> {
  try {
    const response: AxiosResponse<IWeatherResponse> = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`
    );
    return response.data.current.temperature_2m;
  } catch (err) {
    console.error(err);
    return null;
  }
}
