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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  imgMusics: {
    width: ' 20%',
    borderRadius: 15,
    height: 80,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: 390,
    marginVertical: 2,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 8
  },
  textMusic: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 20,
    width: 200
  },
  image: {
    width: 50,
    height: 50,
  },
  textTitle: {
    fontSize: 20,
    color: '#fff',
  },
  contentTitle: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  buttonPlay_Pause:{
    marginHorizontal: 10, position: 'relative'
  }
});
export default styles;
