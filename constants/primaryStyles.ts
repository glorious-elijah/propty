/**
 * Primary styles and utilities for the application.
 * @module primaryStyles
 */

/**
 * Object containing color values used throughout the application.
 */
import { Dimensions } from "react-native";

export const colors = {
  light: {
    "colour--primary": "#6E38E0",
    "colour--white": "#FFFFFF",
    "colour--gray": "#4D4D4D",
    "colour--black": "#1A1E25",
  },
  dark: {
    "colour--primary": "#6E38E0",
    "colour--white": "#FFFFFF",
    "colour--gray": "#4D4D4D",
    "colour--black": "#1A1E25",
  },
};

/**
 * Standard border radius value used for UI elements.
 */
export const borderRadius = {
  md: 8,
  lg: 11,
};

export const padding = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};
export const margin = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

export const typography = {
  headingLarge: {
    fontFamily: "Lato-Black",
    fontSize: 28,
  },
  headingMedium: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
  },
  headingSmall: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
  },
  bodyRegular: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
  },
  bodyBold: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
  caption: {
    fontFamily: "Lato-Light",
    fontSize: 14,
  },
  button: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
};

/**
 * Calculates a percentage of the device window height.
 * @param percentage - The percentage of the window height to return between 0 and 1 (e.g., 0.5 for 50% and 0.1 for 10%).
 * @returns The calculated height in pixels.
 */

export const getHeightFromWindow = (percentage: number) => {
  if (percentage > 1 || percentage < 0) {
    console.warn(
      `getHeightFromWindow expects a value between 0 and 1, percentage ${percentage} can't be computed fallingback to 1`
    );

    return 1;
  }
  return Dimensions.get("window").height * percentage;
};

/**
 * Calculates a percentage of the device window width.
 * @param percentage - The percentage of the window width to return between 0 and 1 (e.g., 0.5 for 50% and 0.1 for 10%).
 * @returns The calculated width in pixels.
 */

export const getWidthFromWindow = (percentage: number) => {
  if (percentage > 1 || percentage < 0) {
    console.warn(
      `getHeightFromWindow expects a value between 0 and 1, percentage ${percentage} can't be computed fallingback to 1`
    );

    return 1;
  }
  return Dimensions.get("window").width * percentage;
};

/**
 * Calculates a percentage of the current screen height.
 * @param percentage - The percentage of the current screen  height to return between 0 and 1 (e.g., 0.5 for 50% and 0.1 for 10%).
 * @returns The calculated height in pixels.
 */

export const getHeightFromScreen = (percentage: number) => {
  if (percentage > 1 || percentage < 0) {
    console.warn(
      `getHeightFromScreen expects a value between 0 and 1, percentage ${percentage} can't be computed fallingback to 1`
    );

    return 1;
  }
  return Dimensions.get("screen").height * percentage;
};

/**
 * Calculates a percentage of the current screen  width.
 * @param percentage - The percentage of the current screen  width to return between 0 and 1 (e.g., 0.5 for 50% and 0.1 for 10%).
 * @returns The calculated width in pixels.
 */

export const getWidthFromScreen = (percentage: number) => {
  if (percentage > 1 || percentage < 0) {
    console.warn(
      `getHeightFromScreen expects a value between 0 and 1, percentage ${percentage} can't be computed fallingback to 1`
    );

    return 1;
  }
  return Dimensions.get("screen").width * percentage;
};
