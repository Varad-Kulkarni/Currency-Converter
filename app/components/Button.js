import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    buttonText: {
        color: '#A700DE',
        fontSize: 16,
    },
})

export const Button =({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}