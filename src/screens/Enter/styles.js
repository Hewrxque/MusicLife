import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: '#202020',
  },

  content: {
    flex: 0.5,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content1: {
    flex: 0.5,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: 235,
  },
  buttonRegistration: {
    backgroundColor: '#00FF00',
    width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonLogin: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#00FF00',
    borderWidth: 1,
  },
  buttonConvidate: {
    width: '90%',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderColor: '#00FF00',
    borderWidth: 1
  },
  textLogin: {
    color: '#00FF00',
    fontSize: 16,
  },
  textRegistration: {
    color: '#000000',
    fontSize: 16,
  },
  textConvidate: {
    color: '#fff',
    fontSize: 20,
  },
});
export default styles;
