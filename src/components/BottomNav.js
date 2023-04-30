import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomNav({activepage, navigation}) {
  console.log(activepage);
  return (
    <View style={styles.container}>
      {activepage == 'AllMusics' ? (
        <Icon
          name="music-box-multiple"
          size={40}
          color={'#fff'}
          style={styles.iconActivate}
        />
      ) : (
        <Icon
          name="music-box-multiple"
          size={40}
          color={'#fff'}
          style={styles.icon}
          onPress={() => navigation.navigate('AllMusics')}
        />
      )}
      {activepage == 'Player' ? (
        <Icon
          name="headphones"
          size={40}
          color={'#fff'}
          style={styles.iconActivate}
        />
      ) : (
        <Icon
          name="headphones"
          size={40}
          color={'#fff'}
          style={styles.icon}
          onPress={() => navigation.navigate('Player')}
        />
      )}

      {activepage == 'AllPlaylists' ? (
        <Icon
          name="playlist-play"
          size={40}
          color={'#fff'}
          style={styles.iconActivate}
        />
      ) : (
        <Icon
          name="playlist-play"
          size={40}
          color={'#fff'}
          style={styles.icon}
          onPress={() => navigation.navigate('AllPlaylists')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  icon: {
    color: '#fff',
    marginHorizontal: 100,
  },
  iconActivate: {
    color: '#000',
    backgroundColor: '#00FF00',
    borderRadius: 50,
    bottom: 0,
    position: 'absolute',
    padding: 10,
    left: '43%',
  },
});
