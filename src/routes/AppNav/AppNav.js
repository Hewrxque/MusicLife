import React from 'react';
import Stack from '../StackScreens/StackScreen';
import {NavigationContainer} from '@react-navigation/native';

export default function AppNav() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
