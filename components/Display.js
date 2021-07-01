import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default props => {
    return (
        <View style={styles.display}>
            <Text
                style={styles.textoOper}
                numberOfLines={1}
            >
                {props.valor}
            </Text>
            <Text
                style={styles.textoRes}
                numberOfLines={1}
            >
                {props.res}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#444',
        width: '100%',
    },
    textoRes: {
        fontSize: 50,
        color: '#FFF'
    },
    textoOper: {
        fontSize: 25,
        color: '#FFF'
    },

})