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

export default function MusicPlayer({navigation}) {
  //Custom State
  const [songIndex, setsongIndex] = useState(0);

  //Custom Reference
  const scrollX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    scrollX.addListener(({value}) => {
      // console.log(`ScrollX : ${value} | Device Width : ${width} `);
      const index = Math.round();

      console.log(`Index : ${index}`);
    });
  }, []);

  const renderSongs = ({index, item}) => {
    return (
      <Animated.View style={styles.mainWrapper}>
        <View style={[styles.imageWrapper, styles.elevationImage]}>
          <Image source={item.artwork} style={styles.musicImage} />
        </View>
      </Animated.View>
    );
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {/* área da imagem */}

          <Animated.FlatList
            renderItem={renderSongs}
            data={songs}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollX},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
          />

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
            <TouchableOpacity>
              <Icon2 name="play" size={80} color={'#00FF00'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon2 name="skip-next" size={60} color={'#00FF00'} />
            </TouchableOpacity>
          </View>
        </View>
        {/* área dos botoes de controle */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonIconWrapper}>
            <TouchableOpacity>
              <Icon name="star-outline" size={30} color={'#FFFFFF'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="repeat-outline" size={30} color={'#FFFFFF'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="share-outline" size={30} color={'#FFFFFF'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="grid-outline" size={30} color={'#FFFFFF'} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
