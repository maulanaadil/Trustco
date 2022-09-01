import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useInView } from 'framer-motion'

import * as styles from './styles'
import { clientItem } from './models'

function ClientLogo({
  src,
  alt,
  easing = [0.42, 0, 0.58, 1],
  yOffset = 24,
  custom,
}) {
  const logoRef = useRef(null)
  const isInView = useInView(logoRef)

  const animateLogo = {
    hidden: {
      y: yOffset,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: custom,
        ease: easing,
      },
    },
  }

  return (
    <motion.div
      ref={logoRef}
      initial={!isInView ? 'hidden' : ''}
      animate={isInView ? 'visible' : ''}
      variants={animateLogo}
      className={styles.sClientLogoWrapper}
    >
      <img src={src} alt={alt} className={styles.sClientLogo} />
    </motion.div>
  )
}

export default function ClientSection() {
  return (
    <section className={styles.sClient}>
      <div className={styles.sClientWrapper}>
        {clientItem.slice(0, 8).map((item, index) => (
          <ClientLogo
            src={item.logo}
            alt={item.alt}
            key={index}
            custom={index * 0.5}
          />
        ))}
      </div>
    </section>
  )
}

ClientLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  custom: PropTypes.number,
  easing: PropTypes.array,
  yOffset: PropTypes.number,
}
