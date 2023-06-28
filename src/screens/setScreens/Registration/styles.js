import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const isDarkMode = true; // Defina essa variável como true ou false, dependendo do estado do modo dark

const styles = StyleSheet.create({
    container:{
    flex: 1,
    height: height,
    width: width,
    backgroundColor: isDarkMode ? '#202020' : '#FFFFFF',
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
        width: 200,
        height: 200
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: isDarkMode ? '#FFFFFF' : '#000000', 
        width: "90%",
        height: 50,
        margin: 10,
        color: isDarkMode ? '#FFFFFF' : '#000000',
        paddingHorizontal: 8
    },
    button:{
        backgroundColor: isDarkMode ? '#FFFFFF' : '#000000',
        width: "90%",
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      
    },
    text:{
        color: isDarkMode ? '#000000' : '#FFFFFF',
        fontSize: 16
    }
    
})
export default styles;