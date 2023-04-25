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
export default function Enter({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    
        <View style={styles.content}>
          <Image style={styles.image} source={Logo} />
        </View>
        <View style={styles.content1}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegistration} onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.textRegistration}>Realizar Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonConvidate} onPress={() => navigation.navigate('AllMusics')}>
            <Text style={styles.textConvidate}>Entrar como convidado</Text>
          </TouchableOpacity>
        </View>
     
    </SafeAreaView>
  );
}
/*<LinearGradient
colors={['#000000', '#202020', '#ffffff']}
style={{flex: 1}}/>*/
