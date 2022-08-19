import { Link } from 'gatsby'
import React from 'react'

import PropTypes from 'prop-types'

import * as styles from './styles'

export default function NavItem({ link, children }) {
    return (
        <Link to={link} className={styles.sNavItem}>
            {children}
        </Link>
    )
}

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
