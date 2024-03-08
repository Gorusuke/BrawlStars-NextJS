import { CARDS_PER_PAGE } from '@/lib/constants'
import styles from './global.module.css'

export const CardSkeleton = () => {
  return (
    <div className="rounded-xl">
      <section className={`${styles.skeleton} ${styles.backgroundDark} flex gap-4 rounded-lg`}>
        <div className={styles.skeletonImage} />
        <div className={styles.skeletonContainer}>
          <h3 className={styles.skeletonTitle} />
          <span className={styles.skeletonSpan} />
          <span className={styles.skeletonSpan} />
          <div className="flex justify-center mt-3 gap-2 bg-gray-100">
            {[...Array(4)].map((_, idx) => <div className={styles.skeletonPowers} key={idx} />)}
          </div>
        </div>
      </section>
    </div>
  )
}

export const MapsSkeleton = () => {
  return (
    <section className={styles.skeletonMap}>
      <h2 className={styles.skeletonTitle} />
      <div className={styles.skeletonMapContainer}>
        {[...Array(CARDS_PER_PAGE)].map((_, idx) => <div key={idx} className={`${styles.skeletonImage} ${styles.skeleton}`} />)}
      </div>
    </section>
  )
}

export const EventsSkeleton = () => {
  return (
    <section className={styles.skeletonEvent}>
      <h2 className={styles.skeletonTitle} />
      <div className={styles.skeletonEventContainer}>
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className={styles.skeleton} style={{ backgroundColor: '#f3f4f6' }}>
            <>
              <div className={styles.skeletonEventTop}>
                <span className={styles.skeletonEventTitle} />
                <div className={styles.skeletonEventImage} />
              </div>
              <div className={styles.skeletonEventBanner} />
              <div className={styles.skeletonEventMapContainer}>
                <div className={styles.skeletonPowers} />
                <div className={styles.skeletonEventMapName}>
                  <h3 className={styles.skeletonEventTitle} />
                  <div className={styles.skeletonEventTitle} />
                </div>
              </div>
            </>
            <div className={styles.skeletonEventBottom}>
              <div className={styles.skeletonEventBottomImage}>
                {[...Array(3)].map((_, idx) => <div className={styles.skeletonPowers} key={idx} />)}
              </div>
              <span className={styles.skeletonTitle} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const GameModeSkeleton = () => {
  return (
    <div className={`${styles.skeletonGameModeContainer} ${styles.skeleton}`}>
      <div className={styles.skeletonGameModeTop}>
        <div className={styles.skeletonGameModeTitle}>
          <div className={styles.skeletonPowers} />
          <h3 className={styles.skeletonTitle} />
        </div>
        <div className={styles.skeletonEventImage} />
      </div>
      <div className={styles.skeletonGameModeBanner} />
    </div>
  )
}
