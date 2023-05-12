import React from 'react';
import {StatusBar} from 'react-native';
import Login from '../../screens/setScreens/Login';
import Enter from '../../screens/setScreens/Enter';
import Registration from '../../screens/setScreens/Registration';
import Splash from '../../screens/Splash/splashScreen';
import MusicsPlaylist from '../../screens/MusicsPlaylist'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../BottomTab/BottomTab';
const { Navigator, Screen } = createNativeStackNavigator();

export default function StackScreen({ }) {
  return (
    <Navigator initialRouteName='TabBot' screenOptions={{ headerShown: false }}>
      <Screen name="BottomTab" component={BottomTab} />
      <Screen name="MusicsPlaylist" component={MusicsPlaylist} />
      <Screen name="Splash" component={Splash} />
      <Screen name="Registration" component={Registration} />
      <Screen name="Enter" component={Enter} />
      <Screen name="Login" component={Login} />
  
    </Navigator>
  );
}