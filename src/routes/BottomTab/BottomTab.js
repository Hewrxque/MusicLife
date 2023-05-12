import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllPlaylists from '../../screens/AllPlaylists';
import AllMusics from '../../screens/AllMusics';
import Player from '../../screens/Player';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const player = 'Player';
const allMusics = 'AllMusics';
const allPlaylists = 'AllPlaylists';

const Tab = createBottomTabNavigator();

export default function BottomTab({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName={allMusics}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: '#000'},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === player) {
            iconName = focused ? 'headphones' : 'headphones';
          } else if (rn === allMusics) {
            iconName = focused ? 'music-box-multiple' : 'music-box-multiple';
          } else if (rn === allPlaylists) {
            iconName = focused ? 'playlist-play' : 'playlist-play';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: '#00FF00',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabel: '',
      })}>
      <Tab.Screen name="Player" component={Player} />
      <Tab.Screen name="AllMusics" component={AllMusics} />
      <Tab.Screen name="AllPlaylists" component={AllPlaylists} />
    </Tab.Navigator>
  );
}
