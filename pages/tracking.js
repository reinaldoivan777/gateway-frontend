import React from 'react';
import Head from 'next/head';
import Tracking from '../containers/Tracking';
import SidebarContainer from '../containers/SidebarContainer';
import Content from '../components/Content';
import { withRouter } from 'next/router';

const TrackingPage = router => {
  return (
    <div>
      <Head>
        <title>Gateway - Tracking</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SidebarContainer {...router} />
      <Content>
        <Tracking />
      </Content>
    </div>
  );
};

export default withRouter(TrackingPage);
