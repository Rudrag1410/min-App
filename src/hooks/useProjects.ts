import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import type { Project, ProjectsQueryParams } from "../types/project.types";
import { QUERY_KEYS } from "../constants/project.constants";
import { getProjects, getPaginatedProjects } from "services/getProjects";
import { ITEM_PER_PAGE } from "constants/common.constants";

export const useProjects = () => {
  return useQuery<Project[]>({
    queryKey: QUERY_KEYS.PROJECTS,
    queryFn: getProjects,
  });
};

export const useInfiniteProjects = (
  params: Omit<ProjectsQueryParams, "page | 'limit'"> = {}
) => {
  const { limit = ITEM_PER_PAGE, search = "", filter } = params;

  return useInfiniteQuery({
    queryKey: [...QUERY_KEYS.PROJECTS, "infinite", { limit, search, filter }],
    queryFn: ({ pageParam = 1 }) =>
      getPaginatedProjects({
        page: pageParam,
        limit,
        search,
        filter,
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.hasNextPage
        ? lastPage.pagination.page + 1
        : undefined;
    },
    initialPageParam: 1,
  });
};
