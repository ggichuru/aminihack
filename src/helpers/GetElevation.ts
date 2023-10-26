import axios, { AxiosResponse } from "axios";
import { IElevationResponse } from "../interfaces";

/**
 * Fetches the elevation for a given latitude and longitude.
 *
 * @param lat - The latitude of the location.
 * @param lng - The longitude of the location.
 * @returns A Promise that resolves to the elevation in meters, or `null` in case of an error.
 * @example
 * ```typescript
 * const elevation = await GetElevation(40.7128, -74.0060);
 * ```
 */

export async function GetElevation(
  lat: number,
  lng: number
): Promise<number | null> {
  try {
    const response: AxiosResponse<IElevationResponse> = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}`
    );
    return response.data.elevation;
  } catch (err) {
    console.error(err);
    return null;
  }
}
