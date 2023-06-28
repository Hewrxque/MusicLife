import React from 'react';

import AllPlaylists from '../../screens/AllPlaylists';
import AllMusics from '../../screens/AllMusics';
import Player from '../../screens/Player';
import MusicsPlaylist from '../../screens/MusicsPlaylist';
import PlayerMusic from '../BottomTab/BottomTab';
import Splash from '../../screens/Splash/splashScreen'
import Login from '../../screens/setScreens/Login'
import Enter from '../../screens/setScreens/Enter'
import Registration from '../../screens/setScreens/Registration'

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();



export default function StackScreen({ }) {
  return (
    <Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
       <Screen name="Splash" component={Splash} />
       <Screen name="Enter" component={Enter} />
       <Screen name="Login" component={Login} />
       <Screen name="Registration" component={Registration} />
      <Screen name="PlayerMusic" component={PlayerMusic} />
      <Screen name="AllPlaylists" component={AllPlaylists} />
      <Screen name="AllMusics" component={AllMusics} />
      <Screen name="Player" component={Player} />
      <Screen name="MusicsPlaylist" component={MusicsPlaylist} />
    </Navigator>
  );
}
