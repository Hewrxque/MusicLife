import React from 'react';
import Login from '../src/screens/Login';
import Splash from '../src/screens/Splash';
import Registration from '../src/screens/Registration';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
         <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
