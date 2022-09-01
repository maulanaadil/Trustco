import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Brand, Button } from '@components'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import * as styles from './styles'
import { navItem } from './models'
import NavItem from './components/navitem'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClickClose = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const wootWidgetBubble1 = document.getElementsByClassName('woot-widget-bubble')[0];
    const wootWidgetBubble2 = document.getElementsByClassName('woot-widget-bubble')[1];
    const wootWidgetHolder = document.getElementsByClassName('woot-widget-holder')[0];
    if (wootWidgetBubble1 !== undefined && wootWidgetHolder !== undefined && wootWidgetBubble2 !== undefined) {
      wootWidgetBubble1.setAttribute('id', 'woot-widget-bubble-1');
      wootWidgetBubble2.setAttribute('id', 'woot-widget-bubble-2');
      wootWidgetHolder.setAttribute('id', 'woot-widget-holder');
    }
  })
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
    <nav className={styles.sHeader}>
      <div className={styles.smHeaderWrapper}>
        <Brand />
        <div className={styles.smHeaderContainerButtonOpen}>
          <button
            onClick={handleClickOpen}
            className={styles.smHeaderButton}
          >
            <span className={styles.smSrOnly}>Open menu</span>
            <Bars3Icon
              className={styles.smIconBar}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <div className={styles.sWrapperNavItem}>
        {navItem.map((item) => (
          <NavItem key={item.name} link={item.to}>
            {item.name}
          </NavItem>
        ))}
      </div>
      <Button
        size="normal"
        variant="primary"
        type="button"
        className={styles.sButtonHeader}
        onClick={handleClickPopupOpen}
      >
        Reach us
      </Button>
      {isOpen && (
        <motion.div className={styles.smHeaderContainer}>
          <div className={styles.smHeaderResponsiveWrapper}>
            <div className={styles.smHeaderButtonCloseWrapper}>
              <button
                onClick={handleClickClose}
                className={styles.smHeaderButton}
              >
                <span className={styles.smSrOnly}>
                  Open menu
                </span>
                <XMarkIcon
                  className={styles.smIconXMark}
                  aria-hidden="true"
                />
              </button>
            </div>
            {navItem.map((item) => (
              <NavItem
                key={item.name}
                link={item.to}
                onClick={handleClickClose}
                className="mt-[16px] hover:text-secondary-onyx"
              >
                {item.name}
              </NavItem>
            ))}
            <Button
              size="normal"
              variant="primary"
              fullWidth
              type="button"
              className="mt-[16px]"
              onClick={handleClickPopupOpen}
            >
              Reach us
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
