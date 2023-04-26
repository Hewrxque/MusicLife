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
import mImg from '../../assets/akat.jpg';

const Musics = [
  {id: 1, name: 'Akatsuki',  image: require('../../assets/akat.jpg'),},
  {id: 2, name: 'Item 2',  image: require('../../assets/joji.jpg')},
  {id: 3, name: 'Item 3',  image: require('../../assets/linkinpark.jpg')},
  {id: 4, name: 'Item 4',  image: require('../../assets/akatsuki.png')},
  {id: 5, name: 'Item 5',  image: require('../../assets/akat.jpg')},
  {id: 6, name: 'Item 4',  image: require('../../assets/akat.jpg')},
  {id: 7, name: 'Item 5',  image: require('../../assets/akat.jpg')},
  {id: 8, name: 'Item 5',  image: require('../../assets/akat.jpg')},
  {id: 9, name: 'Item 4',  image: require('../../assets/akat.jpg')},
  {id: 10, name: 'Item 5',  image: require('../../assets/akat.jpg')},
];
const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
    <Image source={item.image} style={styles.imgMusics} />
    <Text style={styles.textMusic}>{item.name}</Text>
    </TouchableOpacity>
);


export default function AllMusics({navigation}) {
  return (
   
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <FlatList
        data={Musics}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      </View>
      <View>
        <BottomNav activepage={'AllMusics'} navigation={navigation} />
      </View>
    </SafeAreaView>
   
  );
}
