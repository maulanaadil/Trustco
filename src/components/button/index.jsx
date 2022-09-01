import React from 'react'
import { classnames } from 'tailwindcss-classnames'

import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import * as styles from './styles'
import { getSizeStyle, getVariantStyle } from './helpers'

export default function Button({
  children,
  onClick,
  variant,
  size,
  className,
  disabled,
  disabledOutline,
  fullWidth,
  icon,
  type,
  ...otherProps
}) {
  return (
    <motion.button
      className={classnames(
        styles.sButton,
        getVariantStyle(variant),
        getSizeStyle(size),
        {
          [styles.sButtonDisabled]: disabled,
          [styles.sButtonDisabledOutline]: disabledOutline,
          [styles.sButtonFullWidth]: fullWidth,
        },
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...otherProps}
    >
      {icon}
      {' '}
      {children}
    </motion.button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  size: PropTypes.oneOf(['normal', 'large']),
  disabled: PropTypes.bool,
  disabledOutline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  type: PropTypes.string,
}
