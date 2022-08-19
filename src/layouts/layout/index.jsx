import React from 'react'
import PropTypes from 'prop-types'

import { Header, Head } from '@layouts'

export default function Layout({ children }) {
    return (
        <>
            <Head />
            <Header />
            {children}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
