import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: '#000000',
  },
  content: {
    flex: 0.5,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content1: {
    flex: 0.5,
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
    borderBottomColor: '#FFFFFF',
    width: '90%',
    height: 50,
    margin: 10,
    color: '#FFFFFF',
    paddingHorizontal: 8,
  },
  buttonLogin: {
    backgroundColor: '#00FF8E',
    width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonRegister: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  start: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textLogin: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 700,
  },
  textRegister: {
    color: '#000',
    fontSize: 16,
    fontWeight: 700,
  },
  textStart: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 700,
  },
});

export default styles;
