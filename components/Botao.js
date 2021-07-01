import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, TouchableHighlight, ColorPropType, Dimensions } from 'react-native';

export default props => {

    const estilosBotoes=[styles.btn]

    if (props.duplo) {
        estilosBotoes.push(styles.btnDuplo)
    }
    if (props.igual) {
        estilosBotoes.push(styles.btnIgual)
    }
    if (props.operacao) {
        estilosBotoes.push(styles.btnOper)
    }
    if (props.ac) {
        estilosBotoes.push(styles.btnAC)
    }
    if (props.ac) {
        estilosBotoes.push(styles.btnAC)
    }
    if (props.bs) {
        estilosBotoes.push(styles.btnBackSpace)
    }

    return (
        <TouchableHighlight
        onPress={props.aoClicar}
        >
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn:{
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding:20,
        backgroundColor: '#000',
        color: '#FFF',
        // borderWidth: 1,
        // borderColor: '#777',
        textAlign:'center'
    },
    btnIgual:{
        color: '#F00'
    },
    btnOper:{
        color: '#0F0'
    },
    btnAC:{
        color: '#FF0'
    },
    btnBackSpace:{
        color: '#0FF'
    },
    btnDuplo:{
        width:(Dimensions.get('window').width/4)*2
    },
})