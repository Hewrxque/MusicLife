import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ListItem,
  Button,
  ScrollView,
} from 'react-native';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';
import BottomNav from '../../components/BottomNav';
import Sound from 'react-native-sound';
import Logo from '../../assets/LogoW.png';




export default function AllPlaylists({navigation}) {
  const Musics = [
    {id: 1, name: 'Playlist', image: require('../../assets/ML.jpg')},

  ];
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item}  onPress={() => navigation.navigate('MusicsPlaylist', { itemId: item.id, itemName: item.name })}>
      <Image source={item.image} style={styles.imgMusics} />
      <Text style={styles.textMusic}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
        <Image style={styles.image} source={Logo} />
        <Text style={styles.textTitle}>Playlists</Text>
        </View>
        <FlatList
          data={Musics}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          
        />
      </View>
      <View>
        <BottomNav activepage={'AllPlaylists'} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
