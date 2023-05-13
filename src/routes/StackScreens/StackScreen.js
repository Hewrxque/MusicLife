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
