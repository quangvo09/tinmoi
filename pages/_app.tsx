import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import makeStore from '../makeStore';

export default withRedux(makeStore, { debug: true })(
  class MyApp extends App<{ store }> {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider {...{ store }}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);