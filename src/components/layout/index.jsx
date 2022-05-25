import React from 'react';
import PropTypes from 'prop-types';
import Head from '@components/head';
import Header from '@components/header';
import Footer from '@components/footer';

export default function Layout({ children }) {
  return (
    <>
      <Head title='Homepage' />
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
