import React, { useState } from 'react';
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
import Logo from '../../../assets/LogoW.png';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
export default function Login({navigation}) {
  const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const handleLogin = async () => {
  // Validar o email usando regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    // O email não está no formato correto
    // Exibir mensagem de erro, retornar ou fazer qualquer ação necessária
    return;
  }

  // Validar a senha
  if (senha.length < 6) {
    // A senha precisa ter no mínimo 6 caracteres
    // Exibir mensagem de erro, retornar ou fazer qualquer ação necessária
    return;
  }

  try {
    // Fazer a requisição à API passando os dados de email e senha
    const response = await axios.post('URL_DA_API/login', {
      email: email,
      senha: senha
    });

    // Verificar a resposta da API e realizar as ações necessárias
    if (response.status === 200) {
      // Sucesso no login, redirecionar para outra tela
      navigation.navigate('BottomTab');
    } else {
      // Tratar erros de login, exibir uma mensagem de erro, etc.
    }
  } catch (error) {
    // Tratar erros na requisição, exibir mensagem de erro, etc.
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
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
        />
        <TouchableOpacity style={{ marginLeft: 200 }}>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </ScrollView>
);
}

