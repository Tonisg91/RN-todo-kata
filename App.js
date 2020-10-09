import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { default as store } from './src/store'

import Main from './src/Main'

export default function() {
  return (
    <Provider store={store}>
      <Main />
      <StatusBar style='light' />
    </Provider>
  );
}
