/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import RoutesComponent from '../../components/Routes/RoutesComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - The scalabel react app"
        defaultTitle="The scalable react app"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Layout>
        <Header />
        <RoutesComponent />
        <Footer />
      </Layout>
      <GlobalStyle />
    </AppWrapper>
  );
}
