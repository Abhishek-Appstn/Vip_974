import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../screens/Splash/Splash'
import Login from '../screens/Login/Login'
import OtpValidation from '../screens/OtpValidation/OtpValidation'
import Signup from '../screens/Signup/Signup'
import Home from '../screens/Home/Home'

const Route = () => {
    const stack=createNativeStackNavigator()
    return(
  <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='Splash' component={Splash}/>
        <stack.Screen name='Login' component={Login}/>
        <stack.Screen name='OtpValidation' component={OtpValidation}/>
        <stack.Screen name='Signup' component={Signup}/>
        <stack.Screen name='Home' component={Home}/>



    </stack.Navigator>
    </NavigationContainer>
    )
}

export default Route