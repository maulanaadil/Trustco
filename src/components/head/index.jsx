import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({ title }) {
  return (
    <>
      <Helmet
        defaultTitle='Homepage | Trustco'
        title={title}
        titleTemplate='%s | Trustco'
      />
    </>
  );
}
