# Color System

This directory contains the centralized color system for the portfolio application.

## Colors

The color palette is defined in `colors.ts` and includes:

- **Background**: `#0D0D0D` - Very dark gray
- **Primary Accent**: `#00FF96` - Mint green with glowing effect
- **Secondary Accent**: `#FF41A1` - Hot pink, vibrant
- **Text**: `#E0E0E0` - Light gray for high contrast
- **Highlights**: `#FFD700` - Gold, like coins

## Usage

### In TypeScript/JavaScript Files

````typescript
import { COLORS, getColorWithOpacity } from '../constants/colors';

// Use colors directly
const backgroundColor = COLORS.background;
const primaryColor = COLORS['primary-accent'];

### In CSS/SCSS Files

The colors are available as CSS custom properties:

```css
.my-element {
  background-color: var(--background);
  color: var(--text-color);
  border: 1px solid var(--primary-accent);
  box-shadow: 0 0 10px var(--primary-accent-50);
}
````

### Available CSS Variables

- `--background`
- `--primary-accent`
- `--secondary-accent`
- `--text-color`
- `--highlights`
- `--primary-accent-50` (50% opacity)
- `--highlights-50` (50% opacity)
