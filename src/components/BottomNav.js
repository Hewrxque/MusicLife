import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomNav({activepage}) {
  //console.log(activepage)
  return (
    <View style={styles.container}>
      {activepage == 'allmusic' ? (
        <Icon
          name="music-box-multiple"
          size={50}
          color={'#000'}
          style={styles.iconActivate}
        />
      ) : (
        <Icon
          name="music-box-multiple"
          size={50}
          color={'#000'}
          style={styles.icon}
        />
      )}
        {activepage == 'player' ? (
        <Icon
          name="headphones"
          size={50}
          color={'#000'}
          style={styles.iconActivate}
        />
      ) : (
        <Icon
          name="headphones"
          size={50}
          color={'#000'}
          style={styles.icon}
        />
      )}
       {activepage == 'player' ? (
        <Icon
          name="playlist-play"
          size={50}
          color={'#000'}
          style={styles.iconActivate}
        />
      ) : (
        <Icon
          name="playlist-play"
          size={50}
          color={'#000'}
          style={styles.icon}
        />
      )}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  icon: {
    color: '#000',
    marginHorizontal: 100
  },
  iconActivate: {
    color: '#000',
    backgroundColor: '#00FF00',
    borderRadius: 50,
    bottom: 0,
    position: 'absolute',
    padding: 10,
    left: '40%'
  },
});
