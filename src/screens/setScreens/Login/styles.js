import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const isDarkMode = true; // Defina essa variável como true ou false, dependendo do estado do modo dark

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: isDarkMode ? '#202020' : '#FFFFFF', // Altera a cor de fundo com base no modo dark
  },
  content: {
    flex: 0.4,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content1: {
    flex: 0.6,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: isDarkMode ? '#FFFFFF' : '#000000', // Altera a cor da borda do input com base no modo dark
    width: '90%',
    height: 50,
    margin: 10,
    color: isDarkMode ? '#FFFFFF' : '#000000', // Altera a cor do texto do input com base no modo dark
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', // Altera a cor de fundo do botão com base no modo dark
    width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: isDarkMode ? '#000000' : '#FFFFFF', // Altera a cor do texto com base no modo dark
    fontSize: 16,
    fontWeight: 'bold',
  },
  goBackButton:{
    marginRight: '90%'
  }
});

export default styles;
