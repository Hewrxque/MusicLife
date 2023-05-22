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
import ImgMusic from '../../assets/ML.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import som from '../../sounds/set.mp3';

export default function Player({navigation}) {
  const [isplaying, setisPlaying] = useState(false);
  const [sound, setSound] = useState(new Sound(som, Sound.MAIN_BUNDLE));
  const playIcon = <Icon name="play" size={50} color="#fff" />;
  const pauseIcon = <Icon name="pause" size={50} color="#fff" />;

  const renderSongs = ({index, item}) => {
    return (
      <Animated.View style={styles.mainWrapper}>
        <View style={[styles.imageWrapper, styles.elevationImage]}>
          <Image source={item.artwork} style={styles.musicImage} />
        </View>
      </Animated.View>
    );
  };
  //Animacao da imagem
  let rotateValueHolder = new Animated.Value(0);
  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  useEffect(() => {
    if (isplaying == true) {
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
  // controle do play ou pause
  const handleSound = () => {
    if (isplaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setisPlaying(!isplaying);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* área da imagem */}

        <View style={styles.mainWrapper}>
          <View style={[styles.imageWrapper, styles.elevationImage]}>
            <Animated.Image
              source={ImgMusic}
              style={[styles.musicImage, {transform: [{rotate: RotateData}]}]}
            />
          </View>
        </View>

        {/* área de texto da música*/}
        <View>
          <Text style={[styles.songTitle, styles.songContent]}>
            Akatsuki.mp4
          </Text>
          <Text style={[styles.songArtist, styles.songContent]}>7 Minutoz</Text>
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
        {/* área dos botoes de controle das músicas */}
        <View style={styles.musicButtonControl}>
          <TouchableOpacity>
            <Icon2 name="skip-previous" size={60} color={'#fff'} />
          </TouchableOpacity>
          {/* funcao de controle do player*/}

          <TouchableOpacity onPress={handleSound}>
            {isplaying ? pauseIcon : playIcon}
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon2 name="skip-next" size={60} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
