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
export default function Splash(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#000000', '#202020', '#ffffff']}
        style={{flex: 1}}>
        <View style={styles.content}>
          <Image style={styles.image} source={Logo} />
        </View>
        <View style={styles.content1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registration')}
            style={styles.button}>
            <Text style={styles.text}>Realizar Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
