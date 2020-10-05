import React from 'react';
import Main from './src/components/Main'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <>
      <Main />
      <StatusBar style='light' />
    </>
  );
}
