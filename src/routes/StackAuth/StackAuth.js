import React from 'react';
import {StatusBar} from 'react-native';
import Login from '../../screens/setScreens/Login';
import Enter from '../../screens/setScreens/Enter';
import Registration from '../../screens/setScreens/Registration';
import Splash from '../../screens/Splash/splashScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function StackAuth({ }) {
  return (
    <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: true,
        headerTransparent: true,
        title: '',
      }}
    />
    <Stack.Screen name="Enter" component={Enter} />
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
);
};
