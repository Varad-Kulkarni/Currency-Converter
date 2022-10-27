import React, { useContext } from "react"
import { StatusBar, FlatList, View, StyleSheet, Text } from "react-native"
import { Entypo } from "@expo/vector-icons"

import currencies from "../data/currencies.json"
import { RowItem, RowSeparator } from "../components/RowItem"
import { ConversionContext } from '../util/ConversionContext'

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '$primaryBlue',
  },
})

export default ({ navigation, route = {} }) => {
  const params = route.params || {}
  const { activeCurrency } = params
  const { setBaseCurrency, setQuoteCurrency } = useContext(ConversionContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '$white',
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = activeCurrency === item

          return (
            <RowItem
              title={!selected && item}
              onPress={() => {
                if(params.isBaseCurrency) {
                  setBaseCurrency(item)
                }
                else {
                  setQuoteCurrency(item);
                }

                navigation.pop()
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={'#FFFFFF'} />
                  </View>
                )
              }
            />
          )
        }}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  )
}