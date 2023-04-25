import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomNav({activepage}){
    //console.log(activepage)
    return(
        <View style={styles.container}>
            {activepage == 'allmusic' ?  <Icon name="music-box-multiple" size={50} color={'#fff'} style={styles.iconActivate}/> :  <Icon name="music-box-multiple" size={50} color={'#fff'} style={styles.icon}/>}
            <Icon name="playlist-play" size={50} color={'#fff'}/>
            <Icon name="headphones" size={50} color={'#fff'}/>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    },
    icon:{

    },
    iconActivate:{

    }
})
