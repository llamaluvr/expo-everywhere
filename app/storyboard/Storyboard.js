import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from '@expo/vector-icons';
import ChatScreen from "./ChatScreen";
import InboxScreen from "./InboxScreen";
import SettingsScreen from "./SettingsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ title: 'Inbox'}} />
        <Stack.Screen name="Chat" title="Chat" options={{ title: 'Chat'}} component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
