import * as React from "react";
import { Platform } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from '@expo/vector-icons';
import ChatScreen from "./ChatScreen";
import InboxScreen from "./InboxScreen";
import SettingsScreen from "./SettingsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getInboxTitle = () => {
  const prefix = 'Inbox for ';
  switch(Platform.OS) {
    case 'ios':
      return prefix + 'iOS';
    case 'android':
      return prefix + 'Android';
    case 'web':
      return prefix + 'Web';
    case 'electron':
      return prefix + 'Electron'
    default:
      return '???'
  }
}

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Inbox"
      component={InboxScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-settings" size={32} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="inbox" size={32} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function Storyboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ title: getInboxTitle()}} />
        <Stack.Screen name="Chat" title="Chat" options={{ title: 'Chat'}} component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
