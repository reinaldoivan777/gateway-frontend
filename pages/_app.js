import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { Wrapper } from '../components/Wrapper';
import { initStore } from '../redux/store';
import { getCookie } from '../utils/cookie';
import Router from 'next/router';

export function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const { pathname } = ctx;
    const cookie = getCookie('token', ctx.req);
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!cookie) {
      const isPrivateRoute = pathname === '/tracking' || pathname === '/';

      if (isPrivateRoute) redirectUser(ctx, '/login');
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Fragment>
        <Head>
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
            crossOrigin='anonymous'
          />
          <link href='https://fonts.googleapis.com/css?family=Poppins&display=swap' rel='stylesheet' />
          <script src='https://storage.googleapis.com/studylink/libs/fontawesome-pro-5.3.1-web/js/all.min.js' />
        </Head>
        <Provider store={store}>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </Provider>
      </Fragment>
    );
  }
}

export default withRedux(initStore)(MyApp);
