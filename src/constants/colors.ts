export const COLORS = {
  background: '#0D0D0D', // very dark gray
  'primary-accent': '#00FF96', // mint green, glowing effect
  'secondary-accent': '#FF41A1', // hot pink, vibrant
  text: '#E0E0E0', // light gray for high contrast
  highlights: '#FFD700', // gold, like coins
} as const;

export type ColorKey = keyof typeof COLORS;

// Utility function to get color with opacity
export const getColorWithOpacity = (color: ColorKey, opacity: number): string => {
  const hex = COLORS[color].replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
