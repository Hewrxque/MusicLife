import React from 'react';
import Stack from '../StackScreens/StackScreen';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
export default function AppNav() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={"#00FF00"}/>
      <Stack />
    </NavigationContainer>
  );
}
