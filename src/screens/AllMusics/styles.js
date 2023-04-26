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
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content1: {
    flex: 0.5,
    
    alignItems: 'center',
  },
  imgMusics: {
    width: 80,
    height: 80,
    marginRight: 220
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 2,
    backgroundColor: '#000',
    borderRadius: 20
  },
  textMusic: {
    fontSize: 16,
    color: '#fff',
  },
});
export default styles;
