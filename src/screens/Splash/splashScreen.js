import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Logo from '../../assets/ML.png'

export default function Splash({navigation}) {
    

    useEffect(() => {
       
        setTimeout(() => {
            navigation.navigate('Enter');
        }, 7000); // tempo em milissegundos
      }, []);
  
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});