import { Link, useLocation } from "react-router";
import classNames from "classnames";
import { useProjects } from "hooks/useProjects";
import styles from "./Sidebar.module.css";
import { navItems } from "./Sidebar.constants";
import { useMemo } from "react";
import { PROJECT_STATUS } from "constants/project.constants";

const Sidebar = () => {
  const location = useLocation();
  const { data: projects } = useProjects();

  const activeCount = useMemo(
    () =>
      projects?.filter((p) => p.status === PROJECT_STATUS.ACTIVE).length || 0,
    [projects]
  );

  const totalCount = useMemo(() => projects?.length || 0, [projects]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.logo}>ProjectHub</h2>
        <p className={styles.tagline}>Manage your projects</p>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={classNames(styles.navItem, {
              [styles.active]: location.pathname === item.path,
            })}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{totalCount}</span>
            <span className={styles.statLabel}>Total Projects</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{activeCount}</span>
            <span className={styles.statLabel}>Active</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
