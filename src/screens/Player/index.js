import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import Logo from '../../assets/ML.png';
import LinearGradient from 'react-native-linear-gradient';
import BottomNav from '../../components/BottomNav';

export default function Player({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
        <Text>
            Player
        </Text>
        
    </View>
    <View>
        <BottomNav activepage={'player'}/>
    </View>
    </SafeAreaView>
  );
}

