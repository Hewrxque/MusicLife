import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';

import BottomNav from '../../components/BottomNav';

export default function AllPlaylists({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
        <Text>
            All Playlists
        </Text>
        
    </View>
    <View>
        <BottomNav activepage={'AllPlaylists'} navigation={navigation}/>
    </View>
    </SafeAreaView>
  );
}

