import React from "react"
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native"

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFFFFF',
    backgroundColor: '#00C0F0',
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    borderRadius: 5,
  },
  button: {
    padding: 15,
    borderRightColor: '#E2E2E2',
    borderRightWidth: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    // color: '#230A2E',
    color: '8928b3',
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    // color: '#797979',
    color: '#3b3939',
    // marginTop: 10,
  },
})

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  )
}