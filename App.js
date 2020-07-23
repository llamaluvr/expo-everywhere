import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Storyboard from './app/storyboard/Storyboard';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Storyboard />
      <StatusBar style="auto" />
    </View>
  );
}
