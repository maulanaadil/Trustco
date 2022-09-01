import { Button } from '@components'
import React, { useState } from 'react'

import * as styles from './styles'

export default function IntrestedSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const handleClickPopupOpen = () => {
    const wootWidgetBubble1 = document.getElementById('woot-widget-bubble-1');
    const wootWidgetBubble2 = document.getElementById('woot-widget-bubble-2');
    const wootWidgetHolder = document.getElementById('woot-widget-holder');
    if (wootWidgetBubble1 !== undefined && wootWidgetHolder !== null && wootWidgetBubble2 !== undefined) {
      if (isPopupOpen == false) {
        wootWidgetHolder.classList.remove('woot--hide');
        wootWidgetBubble1.classList.add('woot--hide');
        wootWidgetBubble2.classList.remove('woot--hide');
        setIsPopupOpen(!isPopupOpen);
      } else {
        wootWidgetHolder.classList.add('woot--hide');
        wootWidgetBubble1.classList.remove('woot--hide');
        wootWidgetBubble2.classList.add('woot--hide');
        setIsPopupOpen(!isPopupOpen);
      }
    }
  }
  return (
    <div className={styles.sIntrested}>
      <div className={styles.sIntrestedContent}>
        <h4 className={styles.sIntrestedTitle}>
          Interested to work with us? lets collaborate to build your
          {' '}
          <br />
          imagination come true.
        </h4>
        <Button
          size="large"
          variant="secondary"
          type="button"
          onClick={handleClickPopupOpen}
        >
          Start a Project
        </Button>
      </div>
    </div>
  )
}
