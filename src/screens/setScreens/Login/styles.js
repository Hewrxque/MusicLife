import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
    flex: 1,
    height: height,
    width: width,
    backgroundColor: '#202020'
    },

    content:{
    flex: 0.4,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  
    },
    content1:{
    flex: 0.6,
    marginHorizontal: 10,
    marginVertical: 10,
   
    alignItems: "center",
   
    },
    image: {
        width: "51%",
        height: 200
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: "#FFFFFF",
        width: "90%",
        height: 50,
        margin: 10,
        color: "#FFFFFF",
        paddingHorizontal: 8
    },
    button:{
        backgroundColor: "#00FF00",
        width: "90%",
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      
    },
    text:{
        color: '#000',
        fontSize: 16
    }
    
})
export default styles;