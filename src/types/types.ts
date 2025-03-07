export interface Skill {
  title: string;
  tech: string[];
  data: string;
}

// Define the structure for a project
export interface Project {
  name: string;
  tech: string[];
  info: string;
  link: string;
  repository_link: string;
}

export type Theme = {
  // Background Colors
  background_base: string;
  background_primary: string;
  background_secondary: string;
  background_contrast: string;

  // Text Colors
  text_base: string;
  text_primary: string;
  text_secondary: string;
  text_contrast: string;

  // Shadow Colors
  shadow_base: string;
  shadow_primary: string;
  shadow_secondary: string;
  shadow_contrast: string;

  // Border Colors
  border_base_color: string;

  // Hover
  hover_background_base: string;
  hover_shadow: string;
};
