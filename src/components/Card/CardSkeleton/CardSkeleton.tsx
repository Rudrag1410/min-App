import styles from "./CardSkeleton.module.css";

const CardSkeleton = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.header}>
        <div className={styles.titleSkeleton}></div>
        <div className={styles.statusSkeleton}></div>
      </div>
      <div className={styles.descriptionSkeleton}></div>
      <div className={styles.descriptionSkeletonShort}></div>
    </div>
  );
};

export default CardSkeleton;
