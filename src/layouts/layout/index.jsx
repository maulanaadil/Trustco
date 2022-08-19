import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'

import { Header, Head } from '@layouts'

export default function Layout({ children }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <Head />
            <Header />
            {children}
        </AnimatePresence>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
