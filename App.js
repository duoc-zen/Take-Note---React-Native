import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import loginScreen from './screen/login'
import homeScreen from './screen/home'
import signinScreen from './screen/signin'
import takenoteScreen from './screen/takenote'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={loginScreen} />
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="signin" component={signinScreen} />
        <Stack.Screen name="takenote" component={takenoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;