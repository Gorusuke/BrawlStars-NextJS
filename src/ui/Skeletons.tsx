import styles from './global.module.css'

export const CardSkeleton = () => {
  return (
    <div className="rounded-xl">
      <section className={`${styles.skeleton} ${styles.backgroundDark} flex gap-4 rounded-lg`}>
        <div className={styles.skeletonImage}/>
        <div className={styles.skeletonContainer}>
          <h3 className={styles.skeletonTitle}/>
          <span className={styles.skeletonSpan}/>
          <span className={styles.skeletonSpan}/>
          <div className="flex justify-center mt-3 gap-2 bg-gray-100">
            {[...Array(4)].map((_, idx) => <div className={styles.powers} key={idx}/>)}
          </div>
        </div>
      </section>
    </div>
  )
}