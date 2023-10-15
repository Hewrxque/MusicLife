import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Ionicons';
import som from '../../sounds/JOJI.mp3';
import Logo from '../../assets/joji.jpg';
import styles from './styles';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
export default function ControlButton() {
  const navigation = useNavigation();
  const [isplaying, setisPlaying] = useState(false);
  const [sound, setSound] = useState(new Sound(som, Sound.MAIN_BUNDLE));
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const playIcon = <Icon name="play" size={40} color="#FFFFFF" />;
  const pauseIcon = <Icon name="pause" size={40} color="#FFFFFF" />;

  const handleSound = () => {
    if (isplaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setisPlaying(!isplaying);
  };

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setSound(new Sound(songs[nextIndex].audio, Sound.MAIN_BUNDLE));
    setisPlaying(false);
  };

  const handlePreviousSong = () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(previousIndex);
    setSound(new Sound(songs[previousIndex].audio, Sound.MAIN_BUNDLE));
    setisPlaying(false);
  };

  return (
    <View style={styles.container}>
     
      <TouchableOpacity
        style={styles.contentButton}
        onPress={() => navigation.navigate('Player')}>
            <LinearGradient 
          colors={['#00FF8E', '#000000']} // Cores do gradiente
        start={{ x: 0, y: 0 }} // Ponto inicial do gradiente (esquerda superior)
        end={{ x: 1, y: 1 }} // Ponto final do gradiente (direita inferior)
        style={styles.gradient}
      >
        <Image source={Logo} style={styles.imageButton} />
        <Text style={styles.textButton}>Joji</Text>
        <View style={styles.musicButtonControl}>
          <TouchableOpacity onPress={handlePreviousSong}>
            <Icon2 name="skip-previous" size={40} color={'#FFFFFF'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSound}>
            {isplaying ? pauseIcon : playIcon}
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNextSong}>
            <Icon2 name="skip-next" size={40} color={'#FFFFFF'} />
          </TouchableOpacity>
        </View>
        </LinearGradient>
      </TouchableOpacity>
  
      
      

    </View>
  );
}
