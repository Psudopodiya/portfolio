export interface Theme {
  background_base: string;
  background_secondary: string;
  background_contrast: string;
  text_base: string;
  text_primary: string;
  text_secondary: string;
  text_contrast: string;
  hover_background_base: string;
  hover_shadow: string;
  border_base_color: string;
}

export interface Skill {
  title: string;
  tech: string[];
  data: string;
}

export interface Project {
  name: string;
  tech: string[];
  info: string;
  link: string;
  repository_link: string;
  image?: string;
}
