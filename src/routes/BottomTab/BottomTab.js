import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllPlaylists from '../../screens/AllPlaylists';
import AllMusics from '../../screens/AllMusics';
import Player from '../../screens/Player';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MusicsPlaylist from '../../screens/MusicsPlaylist';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Lab = createMaterialTopTabNavigator();

const player = 'PlayerMusic';
const allMusics = 'AllMusics';
const allPlaylists = 'AllPlaylists';

const Tab = createBottomTabNavigator();

function PlayerMusic({navigation}) {
  return (
    <Lab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#00FF00'},
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#000000',
        tabBarIndicatorStyle: {backgroundColor: '#000000', borderWidth: 3},
        tabBarPressColor: '#000000',
      }}>
      <Lab.Screen name="Player" component={Player} />
      <Lab.Screen name="Playlist" component={MusicsPlaylist} />
    </Lab.Navigator>
  );
}

export default function BottomTab({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName={PlayerMusic}
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
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: '#00FF00',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarAcitveLabel: '',
        
      })}>
      <Tab.Screen name="PlayerMusic" component={PlayerMusic} />
      <Tab.Screen name="AllMusics" component={AllMusics} />
     {/*  <Tab.Screen name="AllPlaylists" component={AllPlaylists} /> */}
    </Tab.Navigator>
  );
}
