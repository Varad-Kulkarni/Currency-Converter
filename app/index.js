import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Home from './screens/Home'
import CurrencyList from './screens/CurrencyList'
import { ConversionContextProvider } from './util/ConversionContext'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer initialRouteName="CurrencyList">
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="CurrencyList"
          component={CurrencyList}
          options={{ title: 'Currency List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



EStyleSheet.build({
  // $primaryBlue: '#4F607A',
  $primaryBlue: '#230A2E',
  // $white: '#FFFFFF',
  $white: '#006985',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
});

const ModalStack = createNativeStackNavigator();
const ModalStackScreen = () => {
  return (
    <NavigationContainer>
      <ConversionContextProvider>
        <ModalStack.Navigator mode="modal">
          <ModalStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <ModalStack.Screen
            name="CurrencyList"
            component={CurrencyList}
            options={({ route }) => ({
              title: route.params && route.params.title,
            })}
          />
        </ModalStack.Navigator>
      </ConversionContextProvider>
    </NavigationContainer>
  )

}

export default () => <ModalStackScreen />
