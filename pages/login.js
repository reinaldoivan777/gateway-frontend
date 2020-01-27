import React from 'react';
import Head from 'next/head';
import LoginContainer from '../containers/LoginContainer';

const LoginPage = () => (
  <div>
    <Head>
      <title>Gateway - Login</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <LoginContainer />
  </div>
);

export default LoginPage;
