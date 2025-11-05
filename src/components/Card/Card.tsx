import { Link, generatePath } from "react-router";
import type { Project } from "types/project.types";
import { ROUTER_PATHS } from "constants/router.constants";
import StatusBadge from "components/StatusBadge";
import styles from "./Card.module.css";

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  const path = generatePath(ROUTER_PATHS.PROJECT_DETAILS, { id: project.id });

  return (
    <Link to={path} className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.name}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className={styles.description}>{project.description}</p>
    </Link>
  );
};

export default Card;
