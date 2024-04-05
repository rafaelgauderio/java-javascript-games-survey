import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as ButtonIcon } from '@expo/vector-icons';

export default function Home() {

    return (
        <>
            <View style={homeStyles.container}>
                <Image
                    style={homeStyles.personImage}
                    source={require('../../images/person.png')}>
                </Image>
                <Text style={homeStyles.title}>Vote agora!</Text>
                <Text style={homeStyles.subText}>Por gentileza, nos informe o seu jogo preferido!</Text>
            </View>
            <View style={homeStyles.buttonFooter}>
                <RectButton style={homeStyles.button}>
                    <Text style={homeStyles.buttonText}>
                        LINK PARA VOTAR
                    </Text>
                    <View style={homeStyles.buttonIcon}>                        
                        <ButtonIcon name="vote-yea" color="white" size={25}></ButtonIcon>
                    </View>
                </RectButton>
            </View>
        </>
    );

}

let homeStyles = StyleSheet.create(
    {
        container: {
            marginTop: '16%',
            backgroundColor: '#0B1F34',
            alignItems: 'center',
        },
        personImage: {
            width: 310,
            height: 290
        },
        title: {
            color: '#00D4FF',
            fontSize: 36,
            fontWeight: 'bold',
            marginTop: 31,
            fontFamily: "Play_700Bold",
        },
        subText: {
            color: '#ED7947',
            fontSize: 21,
            marginTop: 15,
            fontFamily: "Play_400Regular",
            textAlign: 'center'
        },
        buttonFooter: {
            marginTop: '10%',
            alignItems: 'center'
        },
        button: {
            backgroundColor: '#00D4FF',
            flexDirection: 'row',
            borderRadius: 10
        },
        buttonIcon: {
            backgroundColor: '#ED7947',
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10
        },
        buttonText: {
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 50,
            paddingRight: 50,
            fontFamily: "Play_700Bold",
            fontWeight: 'bold',
            fontSize: 18,
            color: '#0B1F34',
        }
    }
)

