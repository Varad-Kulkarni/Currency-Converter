import React, { Component, useState, useContext } from 'react'
import { Text, StatusBar, Image, ActivityIndicator } from 'react-native'
import { format } from 'date-fns'

import { Container, styles } from '../components/Container'
import { InputWidthButton } from '../components/TextInput';
import { Button } from '../components/Button'
import './styles'
import { ConversionInput } from '../components/ConversionInput';
import { CurrencyGraph } from '../components/CurrencyGraph'
import { ConversionContext } from '../util/ConversionContext';

export default ({ navigation }) => {
    const [value, setValue] = useState('100');
    const { baseCurrency, quoteCurrency, swapCurrencies, date, rates, isLoading } = useContext(ConversionContext)
    const conversionRate = rates[quoteCurrency]

    return (
        <Container>
            <StatusBar translucent={false} barStyle="default" />
            <Image source={require('../components/Logo/images/Currency.png')} />
            <Image source={require('../components/Logo/images/Converter.png')} style={{ margin: 0, padding: 0 }} />

            {!isLoading ? (
                <>

                    <CurrencyGraph baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} conversionRate={conversionRate}/>

                    {/* <Graph /> */}
                    <ConversionInput
                        text={baseCurrency}
                        value={value}
                        onButtonPress={() =>
                            navigation.push("CurrencyList", {
                                title: "Base Currency",
                                activeCurrency: baseCurrency,
                                // onChange: currency => setBaseCurrency(currency),
                                isBaseCurrency: true,
                            })
                        }
                        keyboardType="numeric"
                        onChangeText={text => setValue(text)}
                    />
                    <ConversionInput
                        text={quoteCurrency}
                        value={
                            value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
                        }
                        editable={false}
                        onButtonPress={() =>
                            navigation.push("CurrencyList", {
                                title: "Quote Currency",
                                activeCurrency: quoteCurrency,
                                // onChange: currency => setQuoteCurrency(currency),
                                isBaseCurrency: false,
                            })
                        }
                    />

                    <Text style={{ color: '#FFFFFF', fontSize: 13, textAlign: 'center' }}>
                        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date && format(new Date(date), "MMMM do, yyyy")}.`}
                    </Text>

                    <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />

                    
                </>
            ) : (
                <ActivityIndicator />
            )}


        </Container>
    )
}