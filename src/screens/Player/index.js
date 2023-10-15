import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import som from '../../sounds/set.mp3';
import LinearGradient from 'react-native-linear-gradient';
const songs = [
  {
    title: 'Set Fire x Another Love.mp4',
    artist: 'Desconhecido',
    artwork: require('../../assets/discML.png'),
    audio: require('../../sounds/set.mp3'),
  },
  {
    title: 'Sex, drugs',
    artist: 'Desconhecido',
    artwork: require('../../assets/Sex.jpg'),
    audio: require('../../sounds/sex.mp3'),
  },
  {
    title: 'Rap da Akatsuki',
    artist: '7 Minutoz',
    artwork: require('../../assets/akatsuki.png'),
    audio: require('../../sounds/Akatsuki.mp3'),
  },
  {
    title: 'Terror em Londres',
    artist: 'Enygma',
    artwork: require('../../assets/Londres.jpg'),
    audio: require('../../sounds/Londres.mp3'),
  },
  // Add more songs here
];

export default function Player({navigation}) {
  const [isplaying, setisPlaying] = useState(false);
  const [sound, setSound] = useState(new Sound(som, Sound.MAIN_BUNDLE));
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playIcon = <Icon name="play" size={50} color="#fff" />;
  const pauseIcon = <Icon name="pause" size={50} color="#fff" />;

  let rotateValueHolder = new Animated.Value(0); //Animacao da imagem
  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  useEffect(() => {
    if (sound) {
      sound.getCurrentTime(seconds => setCurrentTime(seconds));
      sound.getDuration(seconds => setDuration(seconds));
      sound.play();
    }

    return () => {
      if (sound) {
        sound.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (isplaying) {
      startImageRotateFunction();
    } else {
      rotateValueHolder.setValue(0);
      rotateValueHolder.stopAnimation();
    }
  }, [isplaying]);

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: [`0deg`, `360deg`],
  });

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

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}>
            <Icon name={'chevron-down-outline'} size={40} color={'#ffffff'} />
          </TouchableOpacity>

     
        {/* área da imagem */}
    
       <LinearGradient 
          colors={['#00FF8E','#004426', '#000000']} // Cores do gradiente
        start={{ x: 1, y: 0 }} // Ponto inicial do gradiente (esquerda superior)
        end={{ x: 1, y: 1 }} // Ponto final do gradiente (direita inferior)
        style={styles.gradient}
      >
      <View style={styles.mainWrapper}>
          <View style={[styles.imageWrapper, styles.elevationImage]}>
            <Animated.Image
              source={currentSong.artwork}
              style={[styles.musicImage, {transform: [{rotate: RotateData}]}]}
            />
          </View>
        </View>
        <View style={styles.musicButtonControl}>
          <TouchableOpacity onPress={handlePreviousSong}>
            <Icon2 name="skip-previous" size={60} color={'#fff'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSound} style={styles.play_pause}>
            {isplaying ? pauseIcon : playIcon}
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNextSong}>
            <Icon2 name="skip-next" size={60} color={'#fff'} />
          </TouchableOpacity>
        </View>
        {/* área de texto da música*/}
        <View>
          <Text style={[styles.songTitle, styles.songContent]}>
            {currentSong.title}
          </Text>
          <Text style={[styles.songArtist, styles.songContent]}>
            {currentSong.artist}
          </Text>
        </View>

        {/* duraçao da música */}
        <View>
          <Slider
            style={styles.progressBar}
            value={currentTime}
            minimumValue={0}
            maximumValue={duration}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="#FFFFFF"
            onValueChange={value => setCurrentTime(value)}
            onSlidingComplete={value => sound.setCurrentTime(value)}
          />
          <View style={styles.durationMusic}>
            <Text style={styles.durationText}>{formatTime(currentTime)}</Text>
            <Text style={styles.durationText}>{formatTime(duration)}</Text>
          </View>
        </View>
        {/* área dos botões de controle das músicas */}
       
        </LinearGradient>
     
      
    

    </SafeAreaView>
  );
}
