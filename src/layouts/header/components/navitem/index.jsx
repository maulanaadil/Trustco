import { Link } from 'gatsby'
import React from 'react'

import PropTypes from 'prop-types'

import classnames from 'tailwindcss-classnames'
import * as styles from './styles'

export default function NavItem({
  link, className, children, onClick,
}) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={classnames(styles.sNavItem, className)}
    >
      {children}
    </Link>
  )
}

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}
