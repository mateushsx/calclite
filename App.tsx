import React from 'react';
import {App} from './src/App';
import {StatusBar, View} from 'react-native';

export default function AppMain() {
  return (
    <View>
      <StatusBar animated />
      <App />
    </View>
  );
}
