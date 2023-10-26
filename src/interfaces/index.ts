/**
 * Interface for the API response containing weather information.
 * @example
 * ```json
 * {
 *   "current": {
 *     "temperature_2m": 20.5
 *   }
 * }
 * ```
 */
export interface IWeatherResponse {
  /**
   * Current weather conditions.
   */
  current: {
    /**
     * Temperature measured 2 meters above the ground, in degrees Celsius.
     */
    temperature_2m: number;
  };
}

/**
 * Interface for the API response containing elevation information.
 * @example
 * ```json
 * {
 *   "elevation": 500
 * }
 * ```
 */
export interface IElevationResponse {
  /**
   * Elevation above sea level, in meters.
   */
  elevation: number;
}

/**
 * Interface for the API response containing time information.
 * @example
 * ```json
 * {
 *   "utc_datetime": "2023-01-01T12:00:00Z"
 * }
 * ```
 */
export interface ITimeResponse {
  /**
   * The current time in UTC, formatted as an ISO 8601 string.
   */
  utc_datetime: string;
}
