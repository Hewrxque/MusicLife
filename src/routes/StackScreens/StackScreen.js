import React from 'react';

import AllPlaylists from '../../screens/AllPlaylists';
import AllMusics from '../../screens/AllMusics';
import Player from '../../screens/Player';
import MusicsPlaylist from '../../screens/MusicsPlaylist';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../BottomTab/BottomTab';
const { Navigator, Screen } = createNativeStackNavigator();



export default function StackScreen({ }) {
  return (
    <Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
      <Screen name="BottomTab" component={BottomTab} />
      <Screen name="AllPlaylists" component={AllPlaylists} />
      <Screen name="AllMusics" component={AllMusics} />
      <Screen name="Player" component={Player} />
      <Screen name="MusicsPlaylist" component={MusicsPlaylist} />
    </Navigator>
  );
}



/* 
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
 */