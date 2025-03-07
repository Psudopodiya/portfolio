// src/constants/styles.ts

import { Theme } from '@/types/types';

const THEME_CLASSES: { light: Theme; dark: Theme } = {
  light: {
    // BG COLORS
    background_base: 'bg-white',
    background_primary: 'bg-gray-600',
    background_secondary: 'bg-orange-400',
    background_contrast: 'bg-black',

    // TEXT COLORS
    text_base: 'text-black',
    text_primary: 'text-gray-400',
    text_secondary: 'text-orange-400',
    text_contrast: 'text-white',

    // SHADOW COLORS
    shadow_base: 'shadow-white',
    shadow_primary: 'shadow-gray-400',
    shadow_secondary: 'shadow-orange-500',
    shadow_contrast: 'shadow-white',

    // Border Colors
    border_base_color: 'border-black',

    // Hover
    hover_background_base: 'hover:bg-orange-400',
    hover_shadow: 'hover:shadow-lg hover:shadow-black',
  },
  dark: {
    // BG COLORS
    background_base: 'bg-black',
    background_primary: 'bg-gray-400',
    background_secondary: 'bg-pear',
    background_contrast: 'bg-white',

    // TEXT COLORS
    text_base: 'text-white',
    text_primary: 'text-gray-600',
    text_secondary: 'text-pear',
    text_contrast: 'text-black',

    // SHADOW COLORS
    shadow_base: 'shadow-white',
    shadow_primary: 'shadow-gray-400',
    shadow_secondary: 'shadow-pear',
    shadow_contrast: 'shadow-black',

    // Border Colors
    border_base_color: 'border-white',

    // Hover
    hover_background_base: 'hover:bg-pear',
    hover_shadow: 'hover:shadow-lg hover:shadow-white',
  },
};

const BG_COLORS = {
  light: 'bg-white',
  dark: 'bg-black',
  light_primary: 'bg-gray-500',
  dark_primary: 'bg-gray-500',
  light_secondary: 'bg-orange-500',
  dark_secondary: 'bg-orange-600',
};

export { BG_COLORS, THEME_CLASSES };
