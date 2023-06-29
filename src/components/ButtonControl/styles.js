import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    width: '95%',
    marginHorizontal: 10,
    justifyContent: 'center',
    marginTop: '1%',
  },
  contentButton: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    backgroundColor: '#00FFA0',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    top: '88%',
    justifyContent: 'space-between',
  },
  button: {
    padding: 15,
  },
  textButton: {
    color: '#000000',
    fontSize: 20,
  },
  imageButton: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 20,
  },
  musicButtonControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
    marginVertical: 10,
  },
  
});
export default styles;
