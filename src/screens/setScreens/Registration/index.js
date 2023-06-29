import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
import axios from 'axios';
import styles from './styles';
import Logo from '../../../assets/LogoW.png';
import Icon from 'react-native-vector-icons/Ionicons'
export default function Registration({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('https://containers-us-west-167.railway.app:7495/railway/registration', { fullName, email, password });

      // Lógica adicional com a resposta da API, se necessário

      // Exemplo de exibição de mensagem de sucesso e redirecionamento para a página de login
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso.');
      navigation.navigate('Login');
    } catch (error) {
      // Tratar o erro, se necessário
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao realizar o cadastro. Por favor, tente novamente.');
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
        <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}>
            <Icon name={'chevron-back-outline'} size={40} color={'#ffffff'} />
          </TouchableOpacity>
          <Image style={styles.image} source={Logo} />
        </View>
        <View style={styles.content1}>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegistration}>
            <Text style={styles.text}>Realizar Cadastro</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
