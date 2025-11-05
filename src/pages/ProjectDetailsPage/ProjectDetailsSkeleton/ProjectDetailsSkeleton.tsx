import styles from "./ProjectDetailsSkeleton.module.css";

const ProjectDetailsSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.titleSection}>
        <div className={styles.titleSkeleton} />
        <div className={styles.badgeSkeleton} />
      </div>

      <div className={styles.descriptionSection}>
        <div className={styles.descriptionTitleSkeleton} />
        <div className={styles.descriptionLine} />
        <div className={styles.descriptionLine} />
        <div className={styles.descriptionLine} />
        <div className={styles.descriptionLineShort} />
      </div>

      <div className={styles.footer}>
        <div className={styles.footerSkeleton} />
      </div>
    </div>
  );
};

export default ProjectDetailsSkeleton;
