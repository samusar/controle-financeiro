import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import Pages from './src/Pages';

export default function App() {
  return (
    <>
      <Pages />
      <StatusBar style="light" />
    </>
  );
}
