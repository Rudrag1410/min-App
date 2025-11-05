import { DEFAULT_PAGE, ITEM_PER_PAGE } from "constants/common.constants";
import { projects } from "data";
import {
  Project,
  PaginatedResponse,
  ProjectsQueryParams,
} from "types/project.types";
import { filterProjects } from "utils/filterProjects";

export const getProjects = async (): Promise<Project[]> => {
  await new Promise((r) => setTimeout(r, 200));
  return projects;
};

export const getPaginatedProjects = async (
  params: ProjectsQueryParams = {}
): Promise<PaginatedResponse<Project>> => {
  await new Promise((r) => setTimeout(r, 300));

  const {
    page = DEFAULT_PAGE,
    limit = ITEM_PER_PAGE,
    search = "",
    filter,
  } = params;

  let filteredData = projects;

  if (search.trim()) {
    filteredData = filterProjects(filteredData, search);
  }

  if (filter) {
    filteredData = filteredData.filter((p) => p.status === filter);
  }

  const total = filteredData.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const data = filteredData.slice(startIndex, endIndex);

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
    },
  };
};
