import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';

import Logo from '../../assets/LogoW.png';
import Sound from 'react-native-sound';
import som from '../../sounds/set.mp3';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AllMusics({navigation}) {
  const [isplaying, setisPlaying] = useState(true);
  const sound = new Sound(som, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Falha ao carregar o som', error);
      return;
    }
    console.log('Loaded sound!');
  });

  function togglePlayPause() {
    if (sound.isPlaying() == false) {
      sound.play();
      setisPlaying(true);
    } else {
      sound.pause();
      setisPlaying(false);
    }
  }
  const Musics = [
    {id: 1, name: 'Akatsuki', image: require('../../assets/akat.jpg')},
    {id: 2, name: 'Joji', image: require('../../assets/joji.jpg')},
    {id: 3, name: 'LinkinPark', image: require('../../assets/linkinpark.jpg')},
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item}  onPress={() => navigation.navigate('Player', { itemId: item.id, itemName: item.name })}>
      <Image source={item.image} style={styles.imgMusics} />
      <Text style={styles.textMusic}>{item.name}</Text>
    
      <TouchableOpacity style={styles.buttonPlay_Pause} onPress={togglePlayPause}>
              {isplaying ? (
                <Icon name="play" size={30} color="#fff" />
              ) : (
                <Icon name="pause" size={30} color="#fff" />
              )}
            </TouchableOpacity>
    </TouchableOpacity>
    
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginVertical: 10}}>
        <FlatList
          data={Musics}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          
        />
    </View>
    </SafeAreaView>
  );
}
