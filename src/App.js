import React from 'react';
import Login from '../src/screens/Login';
import Enter from '../src/screens/Enter';
import Registration from '../src/screens/Registration';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Enter">
        <Stack.Screen
          name="Enter"
          component={Enter}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
