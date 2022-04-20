import React from 'react';
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
