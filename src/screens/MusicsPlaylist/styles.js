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
  },
  textMusic: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 20
  },
  image: {
    width: '10%',
    height: 38,
  },
  textTitle: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 220
  },
  contentTitle: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 20,
  },
});
export default styles;
