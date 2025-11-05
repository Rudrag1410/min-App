import type { ProjectStatus } from "types/project.types";

export const getPageTitle = (filter?: ProjectStatus) => {
  if (filter) {
    return `${filter.charAt(0).toUpperCase() + filter.slice(1)} Projects`;
  }
  return "All Projects";
};
