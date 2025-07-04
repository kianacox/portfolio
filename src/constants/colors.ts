export const COLORS = {
  background: '#0D0D0D', // very dark gray
  'primary-accent': '#00FF96', // mint green, glowing effect
  'secondary-accent': '#FF41A1', // hot pink, vibrant
  text: '#E0E0E0', // light gray for high contrast
  highlights: '#FFD700', // gold, like coins
} as const;

export type ColorKey = keyof typeof COLORS;
