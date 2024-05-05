export interface Dictionary {
  [key: string]: string;
}

export interface PortfolioData {
  details: Details;
  projects: Project[];
}

export interface Details {
  name: string;
  links: Dictionary;
}

export interface Project {
  label: string;
  description: string;
  imageName: string;
  links: Dictionary;
  tags: string[];
}
