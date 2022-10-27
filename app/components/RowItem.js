import React from "react"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"

// import colors from "../constants/colors"

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: '$white',
  },
  title: {
    color: '$inputText',
    fontSize: 16,
  },
  separator: {
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
})

// export const RowItem = ({ title, onPress, rightIcon }) => (
//   <TouchableOpacity onPress={onPress} style={styles.row}>
//     <Text style={styles.title}>{title}</Text>
//     {/* {rightIcon} */}
//   </TouchableOpacity>
// )

export const RowItem = ({ title, onPress, rightIcon }) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    {rightIcon}
  </TouchableOpacity>
)

export const RowSeparator = () => <View style={styles.separator} />

// import React from 'react'
// import {View} from 'react-native'

// const RowItem = () => {
//   return (
//     <View>This is rowitem</View>
//   )
// }

// export default RowItem