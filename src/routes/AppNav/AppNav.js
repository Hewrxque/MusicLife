import React from 'react';
import Stack from '../StackScreens/StackScreen';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
export default function AppNav() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={"#000000"}/>
      <Stack />
    </NavigationContainer>
  );
}
