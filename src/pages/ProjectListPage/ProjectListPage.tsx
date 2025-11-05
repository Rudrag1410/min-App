import { useMemo, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { useInfiniteProjects } from "hooks/useProjects";
import { useDebounce } from "hooks/useDebounce";
import type { Project, ProjectStatus } from "types/project.types";
import Card from "components/Card";
import CardSkeleton from "components/Card/CardSkeleton";
import SearchInput from "components/SearchInput";
import styles from "./ProjectListPage.module.css";
import { getPageTitle } from "./ProjectListPage.utils";

interface ProjectListPageProps {
  filter?: ProjectStatus;
}

const ProjectListPage = ({ filter }: ProjectListPageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteProjects({
      search: debouncedSearch,
      filter,
    });

  const allProjects: Project[] = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data]
  );

  const totalCount = useMemo(
    () => data?.pages[0]?.pagination.total ?? 0,
    [data]
  );

  const pageTitle = useMemo(() => getPageTitle(filter), [filter]);

  return (
    <div className={styles.container}>
      <div className={styles.stickyHeader}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>{pageTitle}</h1>
            <p className={styles.subtitle}>
              {totalCount} {totalCount === 1 ? "project" : "projects"} found
            </p>
          </div>
        </div>

        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search projects..."
          ariaLabel="Search projects"
        />
      </div>

      <div className={styles.virtuosoContainer}>
        {isLoading ? (
          <div className={styles.skeletonContainer}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className={styles.virtuosoItem}>
                <CardSkeleton />
              </div>
            ))}
          </div>
        ) : allProjects.length === 0 ? (
          <p className={styles.empty}>No projects found</p>
        ) : (
          <Virtuoso
            style={{ height: "100%" }}
            data={allProjects}
            endReached={() => {
              if (hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
              }
            }}
            itemContent={(_, project) => (
              <div className={styles.virtuosoItem}>
                <Card key={project.id} project={project} />
              </div>
            )}
            components={{
              Footer: () =>
                isFetchingNextPage ? (
                  <div className={styles.loadingMore}>
                    <p>Loading more projects...</p>
                  </div>
                ) : null,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectListPage;
