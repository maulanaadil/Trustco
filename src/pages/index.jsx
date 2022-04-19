import React from 'react';
import Layout from '@components/layout';
import Hero from '@components/hero';
import About from '@components/about';
import Project from '@components/project';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Project />
    </Layout>
  );
};

export default IndexPage;
