import React from 'react'
import PropTypes from 'prop-types'

import { Header, Head, Footer } from '@layouts'
import { ProgressBar } from '@components'

export default function Layout({ children }) {
  return (
    <>
      <ProgressBar />
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
