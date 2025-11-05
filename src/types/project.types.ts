export type ProjectStatus = "active" | "pending" | "archived";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
  };
}

export interface ProjectsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  filter?: ProjectStatus;
}
