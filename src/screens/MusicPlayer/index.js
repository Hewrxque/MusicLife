import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';
import ImgMusic from '../../assets/akatsuki.png';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
export default function MusicPlayer({navigation}) {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {/* área da imagem */}
          <View style={[styles.imageWrapper, styles.elevationImage]}>
            <Image source={ImgMusic} style={styles.musicImage} />
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
                <Icon2
                  name="skip-previous"
                  size={60}
                  color={'#00FF00'}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon2 name="play" size={80} color={'#00FF00'} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon2
                  name="skip-next"
                  size={60}
                  color={'#00FF00'}
                />
              </TouchableOpacity>
           
          </View>
        </View>
        {/* área dos botoes de controle */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonIconWrapper}>
            <TouchableOpacity>
              <Icon name="star-outline" size={40} color={'#FFFFFF'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="repeat-outline" size={40} color={'#FFFFFF'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="share-outline" size={40} color={'#FFFFFF'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="grid-outline" size={40} color={'#FFFFFF'} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
