import React from 'react'
import PropTypes from 'prop-types'
import { classnames } from 'tailwindcss-classnames'

import { Logo } from '@assets'

import * as styles from './styles'

export default function Brand({ className }) {
  return (
    <div className={classnames(styles.sBrand, className)}>
      <Logo className={styles.sBrandLogo} />
      <h6 className={styles.sBrandLogoText}>TrustcoTech</h6>
    </div>
  )
}

Brand.propTypes = {
  className: PropTypes.string,
}
