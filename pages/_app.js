import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { Wrapper } from '../components/Wrapper';
import { initStore } from '../redux/store';
import { getCookie } from '../utils/cookie';
import Router from 'next/router';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

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
    } else {
      if (pathname === '/' || pathname === '/login') redirectUser(ctx, '/tracking');
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
          <link href='https://fonts.googleapis.com/css?family=Nunito&display=swap' rel='stylesheet' />
          <link
            href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
            rel='stylesheet'
            integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
            crossOrigin='anonymous'
          />
        </Head>
        <Provider store={store}>
          <PersistGate persistor={store.__PERSISTOR} loading={null}>
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
          </PersistGate>
        </Provider>
      </Fragment>
    );
  }
}

export default withRedux(initStore)(MyApp);
