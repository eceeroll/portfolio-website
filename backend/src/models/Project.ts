export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  createdAt: Date;
}

export interface CreateProjectDto {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}
