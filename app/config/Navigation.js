// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

// import Home from '../screens/Home'
// // import Options from '../screens/Options'

// const MainStack = createStackNavigator();
// const MainStackScreen = () => (
//     <MainStack.Navigator>
//         <MainStack.Screen name = "Home" component={Home} />
//         {/* <MainStack.Screen name = "Options" component={Options} /> */}
//     </MainStack.Navigator>
// );

// export default () => (
//     <NavigationContainer>
//         <MainStackScreen/>
//     </NavigationContainer>
// )


// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack'

// import Home from '../screens/Home'
// import Options from '../screens/Options'

// // const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ title: 'Welcome' }}
//         />
//         {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default () => (
//     <MyStack/>
// )