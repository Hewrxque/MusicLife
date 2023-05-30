import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import styles from './styles';
import Logo from '../../../assets/ML.png';
import LinearGradient from 'react-native-linear-gradient';
export default function Login({navigation}) {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
     
        <View style={styles.content}>
          <Image style={styles.image} source={Logo} />
          </View>
          <View style={styles.content1}>
          <TouchableOpacity style={styles.buttonLogin}  onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}  onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.textRegister}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.start}  onPress={() => navigation.navigate('BottomTab')}>
            <Text style={styles.textStart}>Começar sem Login</Text>
          </TouchableOpacity>
        </View>
     
    </SafeAreaView>
    </ScrollView>
  );
}

