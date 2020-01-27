import React from 'react';
import Head from 'next/head';
import Tracking from '../containers/Tracking';
import SidebarContainer from '../containers/SidebarContainer';
import { Content } from '../components/Content';

const TrackingPage = () => (
  <div>
    <Head>
      <title>Gateway - Tracking</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <SidebarContainer />
    <Content>
      <Tracking />
    </Content>
  </div>
);

// TrackingPage.getInitialProps = async context => {
//   const { originalUrl } = context.req || {};
//   console.log(context.req);

//   return { originalUrl };
// };

export default TrackingPage;
