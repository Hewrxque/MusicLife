import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sound from 'react-native-sound';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Musics = [
  {
    id: 1,
    name: 'Sex, drugs',
    image: require('../../assets/Sex.jpg'),
    audio: require('../../sounds/sex.mp3'),
  },
  {
    id: 2,
    name: 'Londres',
    image: require('../../assets/Londres.jpg'),
    audio: require('../../sounds/Londres.mp3'),
  },
  {
    id: 3,
    name: 'Rap da Akatsuki',
    image: require('../../assets/akatsuki.png'),
    audio: require('../../sounds/Akatsuki.mp3'),
  },
];

export default function AllMusics() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const navigation = useNavigation();

  const handleSound = (audio) => {
    if (sound) {
      sound.stop();
      sound.release();
    }

    const newSound = new Sound(audio, '', (error) => {
      if (error) {
        console.log('Error loading audio:', error);
        return;
      }
      setIsPlaying(true);
      newSound.play();
      navigation.navigate('PlayerMusic', );
    });

    setSound(newSound);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}  onPress={() => navigation.navigate('PlayerMusic', { itemId: item.id, itemName: item.name })}>
    <Image source={item.image} style={styles.imgMusics} />
    <Text style={styles.textMusic}>{item.name}</Text>
  
    
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical: 10 }}>
        <FlatList
          data={Musics}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
