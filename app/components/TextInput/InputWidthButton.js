import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import color from 'color';

import styles from './styles'

// const InputWidthButton = ({ onPress, buttonText, editable = true }) => (
//     <View style = {styles.container}>
//         <TouchableHighlight style = {styles.buttonContainer} onPress={onPress}>
//             <Text style = {styles.buttonText}>{buttonText}</Text>
//         </TouchableHighlight>
//         <View style={styles.border} />
//         <TextInput />
//     </View>
// )

const InputWidthButton = (props) => {

    const {onPress, buttonText, editable = true} = props
    const containerStyles = [styles.container]
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier,);
    if(editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return(
        <View style = {styles.container}>
            <TouchableHighlight underlayColor = {underlayColor} style = {styles.buttonContainer} onPress={onPress}>
                <Text style = {styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style = {styles.input} {...props} />
        </View>
    )
}

InputWidthButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
}

export default InputWidthButton