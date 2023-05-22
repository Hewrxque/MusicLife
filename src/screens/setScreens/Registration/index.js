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
export default function Registration({navigation}) {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
     
        <View style={styles.content}>
          <Image style={styles.image} source={Logo} />
        </View>
        <View style={styles.content1}>
          <TextInput style={styles.input} placeholder="Nome Completo" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Senha" />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Realizar Cadastro</Text>
          </TouchableOpacity>
        </View>
     
    </SafeAreaView>
    </ScrollView>
  );
}

