import { ReactNode } from "react";
import styles from './global.module.css'

interface TooltipProps {
  children: ReactNode;
  title: string;
  description?: string;
  community?: boolean;
  high?: string;
}

const Tooltip = ({ children, title, description, community = false, high = '65px' }: TooltipProps) => {
  return (
    <div className={styles.tooltip}>
      <div style={{bottom: high}} className={styles.tooltipContent}>
        <span className={styles.span}>
          {community ? title : <b>{title}</b>}
        </span>
        <span className={styles.span}>
          {community
            ? <>Concept by: <b>{description}</b></>
            : description
          }
        </span>
      </div>
      {children}
    </div>
  )
}

export default Tooltip