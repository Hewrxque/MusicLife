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
import Logo from '../../assets/ML.png';
import LinearGradient from 'react-native-linear-gradient';
export default function Login({navigation}) {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
     
        <View style={styles.content}>
          <Image style={styles.image} source={Logo} />
        </View>
        <View style={styles.content1}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Senha" />
          <TouchableOpacity style={{marginLeft: 200}}>
            <Text>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
     
    </SafeAreaView>
    </ScrollView>
  );
}

