import classNames from "classnames";
import type { ProjectStatus } from "types/project.types";
import styles from "./StatusBadge.module.css";

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <span
      className={classNames(styles.statusBadge, className)}
      data-status={status}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default StatusBadge;
