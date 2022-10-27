import React, { useState } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";
// import { Switch } from 'react-native-gesture-handler';

export const CurrencyGraph = ({ baseCurrency, quoteCurrency, conversionRate }) => {
    // Initialize and Finalize Colors...
    let color1 = 125, color2 = 121, color3 = 121;
    if (conversionRate > 1) {
        color1 = 79;
        color2 = 235;
        color3 = 52;
    }
    else if (conversionRate < 1) {
        color1 = 224;
        color2 = 20;
        color3 = 24;
    }
    // ==============================================================================================================

    //Initialize datasets...
    let dataset1 = 1;
    let dataset2 = 3;
    let dataset3 = 2;
    let dataset4 = 4;

    switch (baseCurrency) {
        case "INR":
            switch (quoteCurrency) {
                case "EUR":
                    dataset1 = 0.0126;
                    dataset2 = 0.0119;
                    dataset3 = 0.0113;
                    dataset4 = 0.0119;
                    break;
                case "GBP":
                    dataset1 = 0.0112;
                    dataset2 = 0.0116;
                    dataset3 = 0.0107;
                    dataset4 = 0.0099;
                    break;
                case "INR":
                    dataset1 = 1;
                    dataset2 = 1;
                    dataset3 = 1;
                    dataset4 = 1;
                    break;
                case "JPY":
                    dataset1 = 1.5151;
                    dataset2 = 1.3848;
                    dataset3 = 1.4855;
                    dataset4 = 1.7973;
                    break;
                case "USD":
                    dataset1 = 0.0146;
                    dataset2 = 0.0140;
                    dataset3 = 0.0136;
                    dataset4 = 0.012;
                    break;
                default:
                    console.log("error in switch nested");
            }
            break;

        case "EUR":
            switch (quoteCurrency) {
                case "USD":
                    dataset1 = 1.12;
                    dataset2 = 1.142;
                    dataset3 = 1.1234;
                    dataset4 = 0.9978;
                    break;
                case "GBP":
                    dataset1 = 0.937;
                    dataset2 = 0.8897;
                    dataset3 = 0.9057;
                    dataset4 = 0.8694;
                    break;
                case "INR":
                    dataset1 = 78.8393;
                    dataset2 = 84.6484;
                    dataset3 = 87.4439;
                    dataset4 = 82.0653;
                    break;
                case "JPY":
                    dataset1 = 122.076;
                    dataset2 = 121.8352;
                    dataset3 = 129.8632;
                    dataset4 = 146.9196;
                    break;
                case "EUR":
                    dataset1 = 1;
                    dataset2 = 1;
                    dataset3 = 1;
                    dataset4 = 1;
                    break;
                default:
                    console.log("Error switch nested");
            }
            break;

        case "GBP":
            switch (quoteCurrency) {
                case "USD":
                    dataset1 = 1.2772;
                    dataset2 = 1.2837;
                    dataset3 = 1.3757;
                    dataset4 = 1.1443;
                    break;
                case "GBP":
                    dataset1 = 1;
                    dataset2 = 1;
                    dataset3 = 1;
                    dataset4 = 1;
                    break;
                case "INR":
                    dataset1 = 89.9204;
                    dataset2 = 95.124;
                    dataset3 = 101.6955;
                    dataset4 = 96.8828;
                    break;
                case "JPY":
                    dataset1 = 139.2639;
                    dataset2 = 136.9942;
                    dataset3 = 151.0681;
                    dataset4 = 169.7228;
                    break;
                case "EUR":
                    dataset1 = 1.2052;
                    dataset2 = 1.1248;
                    dataset3 = 1.1921;
                    dataset4 = 1.1505;
                    break;
                default:
                    console.log("switch nested error")
            }
            break;

        case "JPY":
            switch (quoteCurrency) {
                case "USD":
                    dataset1 = 0.00917;
                    dataset2 = 0.00916;
                    dataset3 = 0.007315;
                    dataset4 = 0.0067;
                    break;
                case "GBP":
                    dataset1 = 0.0076;
                    dataset2 = 0.0073;
                    dataset3 = 0.0064;
                    dataset4 = 0.0058;
                    break;
                case "INR":
                    dataset1 = 0.6461;
                    dataset2 = 0.6947;
                    dataset3 = 0.6735;
                    dataset4 = 0.5576;
                    break;
                case "JPY":
                    dataset1 = 1;
                    dataset2 = 1;
                    dataset3 = 1;
                    dataset4 = 1;
                    break;
                case "EUR":
                    dataset1 = 0.0081;
                    dataset2 = 0.0085;
                    dataset3 = 0.0071;
                    dataset4 = 0.0067;
                    break;
            }
            break;

        case "USD":
            switch (quoteCurrency) {
                case "USD":
                    dataset1 = 1;
                    dataset2 = 1;
                    dataset3 = 1;
                    dataset4 = 1;
                    break;
                case "GBP":
                    dataset1 = 0.7835;
                    dataset2 = 0.7798;
                    dataset3 = 0.7571;
                    dataset4 = 0.866;
                    break;
                case "INR":
                    dataset1 = 70.4059;
                    dataset2 = 74.1322;
                    dataset3 = 73.9339;
                    dataset4 = 82.13;
                    break;
                case "JPY":
                    dataset1 = 109.0034;
                    dataset2 = 106.754;
                    dataset3 = 109.8355;
                    dataset4 = 147.11;
                    break;
                case "EUR":
                    dataset1 = 0.8925;
                    dataset2 = 0.9383;
                    dataset3 = 0.8241;
                    dataset4 = 0.9972;
                    break;
            }
            break;

        default:
            console.log("000000000");
    }

    return (
        <View>
            <LineChart
                data={{
                    // labels: ["January", "February", "March", "April", "May", "June"],
                    labels: ["2019", "2020", "2021", "2022"],
                    datasets: [
                        {
                            data: [
                                dataset1, dataset2, dataset3, dataset4
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                // yAxisLabel="$"
                // yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#230A2E",
                    backgroundGradientFrom: "#230A2E",
                    backgroundGradientTo: "#230A2E",
                    decimalPlaces: 5,
                    color: (opacity = 1) => `rgba(${color1}, ${color2}, ${color3}, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                // bezier
                style={{
                    marginVertical: 3,

                    borderRadius: 16
                }}
            />
        </View>
    )
}

// export default CurrencyGraph