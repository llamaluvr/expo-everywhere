import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import InboxScreen from './app/storyboard/InboxScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <InboxScreen />
    </View>
  );
}
