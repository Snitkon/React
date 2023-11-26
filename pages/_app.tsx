import '../styles/global.css';
import { Provider } from 'react-redux';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';
import { setUpSwStore } from '../src/store/swstore';
import { AppProps } from 'next/app';
import React from 'react';

const store = setUpSwStore();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
