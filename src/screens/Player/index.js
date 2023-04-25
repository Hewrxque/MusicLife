import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import styles from './styles';
import ImgMusic from '../../assets/akatsuki.png';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import song from '../../models/data';
import songs from '../../models/data';
import BottomNav from '../../components/BottomNav';
import { transform } from 'typescript';

export default function Player({navigation}) {
  const renderSongs = ({index, item}) => {
    return (
      <Animated.View style={styles.mainWrapper}>
        <View style={[styles.imageWrapper, styles.elevationImage]}>
          <Image source={item.artwork} style={styles.musicImage} />
        </View>
      </Animated.View>
    );
  };

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
    outputRange: [`0deg`, `360deg`]
  })
  // controle do play ou pause
  const [isplaying, setisPlaying] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {/* área da imagem */}

          <View style={styles.mainWrapper}>
            <View style={[styles.imageWrapper, styles.elevationImage]}>
              <Animated.Image source={ImgMusic} style={[styles.musicImage,  {transform: [{ rotate: RotateData}]}]}/>
            </View>
          </View>

          {/* área de texto da música*/}
          <View>
            <Text style={[styles.songTitle, styles.songContent]}>
              Akatsuki.mp4
            </Text>
            <Text style={[styles.songArtist, styles.songContent]}>
              7 Minutoz
            </Text>
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
              <Icon2 name="skip-previous" size={60} color={'#00FF00'} />
            </TouchableOpacity>

            {isplaying == false ? (
              <TouchableOpacity>
                <Icon2
                  name="play"
                  size={80}
                  color={'#00FF00'}
                  onPress={() => setisPlaying(true)}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Icon2
                  name="pause"
                  size={80}
                  color={'#00FF00'}
                  onPress={() => setisPlaying(false)}
                />
              </TouchableOpacity>
            )}

            <TouchableOpacity>
              <Icon2 name="skip-next" size={60} color={'#00FF00'} />
            </TouchableOpacity>
          </View>
        </View>
        {/* área dos botoes de controle */}

        <View>
          <BottomNav activepage={'Player'} navigation={navigation} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
/*
<Animated.FlatList
renderItem={renderSongs}
data={songs}
keyExtractor={item => item.id}
horizontal
pagingEnabled
showsHorizontalScrollIndicator={false}
scrollEventThrottle={16}
/>*/
