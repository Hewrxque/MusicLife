import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './styles';
import ImgMusic from '../../assets/ML.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import som from '../../sounds/set.mp3';

const songs = [
  {
    title: 'Akatsuki.mp4',
    artist: '7 Minutoz',
    artwork: require('../../assets/ML.jpg'),
    audio: require('../../sounds/set.mp3'),
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
    artwork: require('../../assets/ML.jpg'),
    audio: require('../../sounds/sex.mp3'),
  },
  // Add more songs here
];

export default function Player({ navigation }) {
  const [isplaying, setisPlaying] = useState(false);
  const [sound, setSound] = useState(new Sound(som, Sound.MAIN_BUNDLE));
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* área da imagem */}
        <View style={styles.mainWrapper}>
          <View style={[styles.imageWrapper, styles.elevationImage]}>
            <Animated.Image
              source={currentSong.artwork}
              style={[styles.musicImage, { transform: [{ rotate: RotateData }] }]}
            />
          </View>
        </View>

        {/* área de texto da música*/}
        <View>
          <Text style={[styles.songTitle, styles.songContent]}>{currentSong.title}</Text>
          <Text style={[styles.songArtist, styles.songContent]}>{currentSong.artist}</Text>
        </View>

        {/* duraçao da música */}
        <View>
          <Slider
            style={styles.progressBar}
            value={10}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#00FF00"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="#00FF00"
            onSlidingComplete={() => {}}
          />
          <View style={styles.durationMusic}>
            <Text style={styles.durationText}>00:00</Text>
            <Text style={styles.durationText}>10:00</Text>
          </View>
        </View>
        {/* área dos botões de controle das músicas */}
        <View style={styles.musicButtonControl}>
          <TouchableOpacity onPress={handlePreviousSong}>
            <Icon2 name="skip-previous" size={60} color={'#fff'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSound}>
            {isplaying ? pauseIcon : playIcon}
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNextSong}>
            <Icon2 name="skip-next" size={60} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
