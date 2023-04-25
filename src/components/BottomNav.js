import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomNav({activepage}){
    return(
        <View style={styles.container}>
            <Icon name="headphones" size={50} color={'#fff'}/>
            <Icon name="headphones" size={50} color={'#fff'}/>
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
    }
})
