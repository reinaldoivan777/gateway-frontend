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

    {/* <MainContainer>
      <SidebarContainer />
      <Tracking />
    </MainContainer> */}
    <SidebarContainer />
    <Content>
      <Tracking />
    </Content>
  </div>
);

export default TrackingPage;
