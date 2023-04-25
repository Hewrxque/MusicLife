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

});
export default styles;
