import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animation101 from '../screens/Animation101';
import Animation102 from '../screens/Animation102';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import InputScreen from '../screens/InputScreen';
import PullToRefresh from '../screens/PullToRefresh';
import CustomSectionList from '../screens/CustomSectionList';
import ModalScreen from '../screens/ModalScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="InputScreen" component={InputScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="CustomSectionList" component={CustomSectionList} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
    </Stack.Navigator>
  );
};
