import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../screens/Splash/Splash'
import Login from '../screens/Login/Login'
import OtpValidation from '../screens/OtpValidation/OtpValidation'
import Signup from '../screens/Signup/Signup'
import Home from '../screens/Home/Home'
import ChooseServices from '../screens/ChooseServices/ChooseServices'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import ScheduleService from '../screens/ScheduleService'
import ServicesList from '../screens/ServicesList'
import ProductPage from '../screens/ProductPage'
import BookingSummary from '../screens/BookingSummary'
import MyActivities from '../screens/MyActivities'
import BookedTicket from '../screens/BookedTicket'
import ChooseLocation from '../screens/ChooseLocation'
import CabanSizeDetail from '../screens/CabanSizeDetail'
import ServicesPage from '../screens/ServicesPage'
import BuildLocations from '../screens/BuildLocations'
import SelectCabanas from '../screens/SelectCabanas'
import MyBuilds from '../screens/MyBuilds'
import CustomBuild from '../screens/CustomBuild'
import CabanaView from '../screens/CabanaView'
import RequestConfirmation from '../screens/RequestConfirmation'


const drawer=createDrawerNavigator()

const Route = () => {
    const stack=createNativeStackNavigator()
    return(
  <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='Splash' component={Splash}/>
        <stack.Screen name='Login' component={Login}/>
        <stack.Screen name='OtpValidation' component={OtpValidation}/>
        <stack.Screen name='Signup' component={Signup}/>
        <stack.Screen name='Drawer' component={DrawerNavigation}/>
    </stack.Navigator>
    </NavigationContainer>
    )
}

const DrawerNavigation=()=>{
  return(
  <drawer.Navigator screenOptions={{headerShown:false}} >
    <drawer.Screen name='Home' component={Home}/>
    <drawer.Screen name='ChooseServices' component={ChooseServices}/>
    <drawer.Screen name='ScheduleServices' component={ScheduleService}/>
    <drawer.Screen name='ServicesList' component={ServicesList}/>
    <drawer.Screen name='ProductPage' component={ProductPage}/>
    <drawer.Screen name='BookingSummary' component={BookingSummary}/>
    <drawer.Screen name='MyActivities' component={MyActivities}/>
    <drawer.Screen name='BookedTicket' component={BookedTicket}/>
    <drawer.Screen name='ChooseLocation' component={ChooseLocation}/>
    <drawer.Screen name='CabanSize' component={CabanSizeDetail}/>
    <drawer.Screen name='ServicesPage' component={ServicesPage}/>
    <drawer.Screen name='BuildLocations' component={BuildLocations}/>
    <drawer.Screen name='SelectCabanas' component={SelectCabanas}/>
    <drawer.Screen name='MyBuilds' component={MyBuilds}/>
    <drawer.Screen name='CustomBuild' component={CustomBuild}/>
    <drawer.Screen name='CabanaView' component={CabanaView}/>
    <drawer.Screen name='RequestConfirmation' component={RequestConfirmation}/>



    


    

    


    






  </drawer.Navigator>
  )
}

export default Route