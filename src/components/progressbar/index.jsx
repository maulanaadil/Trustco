import { useReadingProgress } from '@hooks'
import React from 'react'

import * as styles from './styles'

export default function ProgressBar() {
  const completion = useReadingProgress()
  return (
    <div className={styles.sProgressBar}>
      <span
        id="progress-bar"
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={styles.sProgressBarWidth}
      />
    </div>
  )
}
