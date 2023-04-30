import React from 'react';
import {StatusBar} from 'react-native';
import Login from '../src/screens/Login';
import Enter from '../src/screens/Enter';
import Registration from '../src/screens/Registration';
import MusicPlayer from '../src/screens/MusicPlayer';
import AllPlaylists from './screens/AllPlaylists';
import AllMusics from '../src/screens/AllMusics';
import Player from '../src/screens/Player';
import Splash from '../src/screens/Splash/splashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
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
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="MusicPlayer"
          component={MusicPlayer}
          options={{
            headerShown: false,          }}
        />
        <Stack.Screen
          name="AllMusics"
          component={AllMusics}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AllPlaylists"
          component={AllPlaylists}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Player"
          component={Player}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            
            headerTintColor: '#FFFFFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
