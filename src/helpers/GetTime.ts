import axios, { AxiosResponse } from "axios";
import { ITimeResponse } from "../interfaces";

/**
 * Fetches the current UTC time.
 *
 * @returns A Promise that resolves to the current UTC time as a string, or `null` in case of an error.
 * @example
 * ```typescript
 * const time = await GetTime();
 * ```
 */

export async function GetTime(location?: string): Promise<string | null> {
  try {
    const now = new Date();
    const time = now.toUTCString();

    return time;
  } catch (err) {
    console.error(err);
    return null;
  }
}
