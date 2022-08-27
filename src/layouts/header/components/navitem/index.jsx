import { Link } from 'gatsby'
import React from 'react'

import PropTypes from 'prop-types'

import * as styles from './styles'
import classnames from 'tailwindcss-classnames'

export default function NavItem({ link, className, children, onClick }) {
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
