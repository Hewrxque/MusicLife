import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
    flex: 1,
    height: height,
    width: width,
    backgroundColor: '#FFFFFF'
    },

    content:{
    flex: 0.5,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#A02'
    },
    content1:{
    flex: 0.5,
    marginHorizontal: 10,
    marginVertical: 10,
   
    alignItems: "center",
    backgroundColor: '#A02788'
    },
    image: {
        width: "51%",
        height: 200
    },
    input:{
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        width: "90%",
        height: 50,
        margin: 10,
        
    },
    button:{
        backgroundColor: "#ffffff",
        width: "90%",
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: '#000',
    }
    
})
export default styles;