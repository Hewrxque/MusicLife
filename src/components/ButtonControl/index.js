import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Ionicons';
import som from '../../sounds/set.mp3';
import Logo from '../../assets/akatsuki.png';
import styles from './styles';

export default function ControlButton() {
  const [isplaying, setisPlaying] = useState(false);
  const [sound, setSound] = useState(new Sound(som, Sound.MAIN_BUNDLE));
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const playIcon = <Icon name="play" size={40} color="#000000" />;
  const pauseIcon = <Icon name="pause" size={40} color="#000000" />;

  const handleSound = () => {
    if (isplaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setisPlaying(!isplaying);
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imageButton} />
      <Text style={styles.textButton}>Akatsuki</Text>
      <TouchableOpacity style={styles.button} onPress={handleSound}>
        {isplaying ? pauseIcon : playIcon}
      </TouchableOpacity>
    </View>
  );
}
