import { Text, StyleSheet, View, Image } from 'react-native';
import React from 'react';

export default function Header() {

    return (
        <View style={headerStyles.header}>
            <Image style={headerStyles.tinyLogo} source={require('../../images/logo.png')} ></Image>
            <Text style={headerStyles.textFirst}>Site Gamey</Text>
            <Text style={headerStyles.textSecond}>Surver</Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({


    header: {
        height: 90,
        backgroundColor: '#37474F',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textFirst: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: "Play_700Bold",
        color: '#ED7947',
        marginLeft: 10,
        marginRight: 5,
    },
    textSecond: {
        fontWeight: 'bold',
        fontFamily: "Play_700Bold",
        fontSize: 19,
        color: '#FFF'
    },
    tinyLogo: {
        width: 30,
        height: 30,
    },

});