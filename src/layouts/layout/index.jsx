import React from 'react'
import PropTypes from 'prop-types'

import { Header, Head, Footer } from '@layouts'

export default function Layout({ children }) {
    return (
        <>
            <Head />
            <Header />
            {children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
