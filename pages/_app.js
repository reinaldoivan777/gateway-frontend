import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { Wrapper } from '../components/Wrapper';
import { initStore } from '../redux/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
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

export default withRedux(initStore, { debug: true })(MyApp);
