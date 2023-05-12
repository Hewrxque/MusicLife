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
import Logo from '../../assets/ML.png';




export default function AllPlaylists({navigation}) {
  const Musics = [
    {id: 1, name: 'Akatsuki', image: require('../../assets/akat.jpg')},
    {id: 2, name: 'Joji', image: require('../../assets/joji.jpg')},
    {id: 3, name: 'LinkinPark', image: require('../../assets/linkinpark.jpg')},
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item}  onPress={() => navigation.navigate('Player', { itemId: item.id, itemName: item.name })}>
      <Image source={item.image} style={styles.imgMusics} />
      <Text style={styles.textMusic}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
        <Text style={styles.textTitle}>Nome PlayList</Text>
        </View>
        <FlatList
          data={Musics}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          
        />
      </View>
    </SafeAreaView>
  );
}
