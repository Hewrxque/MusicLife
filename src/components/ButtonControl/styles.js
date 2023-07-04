import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '95%',
    marginHorizontal: 10,
    justifyContent: 'flex-end',
  },
  contentButton: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#00FFA0',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  
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
