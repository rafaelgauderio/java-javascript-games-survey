import { Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Header() {

    return (
        <Text style={styles.text}>Header</Text>
    );
}

const styles = StyleSheet.create({
  
    text: {
        display: 'flex',
        color: 'silver',
        fontSize: 35,
        fontFamily: 'Arial Black',
        justifyContent: "center",
        alignItems: 'center',
        textShadowColor: 'thistle',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 4,
        borderColor: "thistle",
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 20,
        textAlign: 'center'

    }
});