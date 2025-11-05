import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "types/project.types";
import styles from "./ProjectDetailsPage.module.css";
import { QUERY_KEYS } from "constants/project.constants";
import { getProjectById } from "services/getProjectById";
import { ROUTER_PATHS } from "constants/router.constants";
import ProjectDetailsSkeleton from "./ProjectDetailsSkeleton";
import StatusBadge from "components/StatusBadge";

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: project,
    isLoading,
    error,
  } = useQuery<Project | undefined>({
    queryKey: QUERY_KEYS.PROJECT_BY_ID(id!),
    queryFn: () => getProjectById(id!),
    enabled: !!id,
  });

  return (
    <div className={styles.container}>
      <Link to={ROUTER_PATHS.HOME} className={styles.backLink}>
        ← Back to Projects
      </Link>

      {isLoading ? (
        <ProjectDetailsSkeleton />
      ) : error || !project ? (
        <div className={styles.errorContainer}>
          <p className={styles.error}>
            {error ? "Failed to load project" : "Project not found"}
          </p>
        </div>
      ) : (
        <div className={styles.card}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>{project.name}</h1>
            <StatusBadge status={project.status} />
          </div>

          <div className={styles.descriptionSection}>
            <h2 className={styles.descriptionTitle}>Description</h2>
            <p className={styles.descriptionText}>{project.description}</p>
          </div>

          <div className={styles.footer}>
            <p className={styles.projectId}>
              <strong>Project ID:</strong> {project.id}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
