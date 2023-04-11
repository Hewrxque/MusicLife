import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import Logo from '../../assets/ML.png';
export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={Logo}/>
      </View>
      <View style={styles.content1}>
        <TextInput style={styles.input} placeholder="Email"/>
        <TextInput style={styles.input} placeholder="Senha"/>
        <TouchableOpacity>
            <Text>
                Esqueci minha senha
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>
                Login
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
