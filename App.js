import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-native-paper'
import { theme } from './core/theme'
import policyScreen from './screens/policyScreen'




import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  Dashboard,
} from './screens'



const Stack = createStackNavigator()


const App = () => {
  console.log(policyScreen)
  return(
    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="PolicyScreen" component={policyScreen} />


          
        </Stack.Navigator>
            </NavigationContainer>

    </Provider>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default App

