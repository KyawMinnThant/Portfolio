export type Section = {
  name: string;
  id: string;
  scrollIndex: number;
  scrollIndexSm: number;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  tech: string[];
  githubUrl?: string;
  websiteUrl?: string;
};
