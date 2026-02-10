import { Theme } from '@/types/types';

export const THEME_CLASSES: { light: Theme; dark: Theme } = {
  light: {
    background_base: 'bg-white',
    background_secondary: 'bg-gray-100',
    background_contrast: 'bg-gray-900',
    text_base: 'text-gray-900',
    text_primary: 'text-gray-800',
    text_secondary: 'text-blue-600',
    text_contrast: 'text-white',
    hover_background_base: 'hover:bg-gray-100',
    hover_shadow: 'hover:shadow-lg hover:shadow-gray-300/50',
    border_base_color: 'border-gray-300',
  },
  dark: {
    background_base: 'bg-black',
    background_secondary: 'bg-gray-900',
    background_contrast: 'bg-white',
    text_base: 'text-white',
    text_primary: 'text-gray-200',
    text_secondary: 'text-cyan-400',
    text_contrast: 'text-gray-900',
    hover_background_base: 'hover:bg-gray-800',
    hover_shadow: 'hover:shadow-lg hover:shadow-cyan-500/20',
    border_base_color: 'border-gray-700',
  },
};
