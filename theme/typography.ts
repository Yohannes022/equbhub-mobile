/**
 * ============================================================
 * Typography
 * ------------------------------------------------------------
 * Central typography configuration.
 *
 * One place for
 * • font families
 * • sizes
 * • weights
 * • line heights
 *
 * Never hardcode font sizes inside screens.
 * ============================================================
 */

export const FontFamily = {
  regular: "System",
  medium: "System",
  semibold: "System",
  bold: "System",
};

export const FontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 28,
  hero: 36,
};

export const FontWeight = {
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
};

export const LineHeight = {
  xs: 18,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  hero: 44,
};

export const Typography = {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
};