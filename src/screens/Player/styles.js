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
  //Botoes 
  buttonContainer: {
    width: width,
    marginVertical: 10,
    alignItems: 'center',
    borderTopColor: '#FFFFFF',
    borderTopWidth: 1,
  },
  buttonIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  //Imagem
  imageWrapper: {
    width: 250,
    height: 250,
    marginHorizontal: '2%',
    marginVertical: '5%',
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 1000,
    marginVertical: 10,
  },
  elevationImage: {
    elevation: 5,
  },
  mainWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Título da Música e Artista
  songContent: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  //Nome da música
  songTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  //Nome do artista
  songArtist: {
    fontSize: 16,
    fontWeight: '200',
  },
  //Área de duraçao da música
  progressBar:{
    width: 350,
    height: 40,
    flexDirection: 'row',
  },
  durationMusic:{
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between'
  },
  durationText:{
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  //Área de controle entre as músicas
  musicButtonControl:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
    marginTop: 10,
    marginVertical: 20
  },
  goBackButton:{
    marginRight: '90%'
  },
  gradient: {
    flex: 1,
    
  },
});
export default styles;
