import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer'
import Constants from '../Constants'
import { BookedTicket, BookingSummary, BuildLocations, CabanaView, CabanSizeDetail, ChooseLocation, ChooseServices, CustomBuild, EditProfile, Home, Login, Membership, MembershipDesc, MyActivities, MyBuilds, Myprofile, OtpValidation, ProductPage, RequestConfirmation, ScheduleService, SelectCabanas, ServicesList, ServicesPage, Signup, Splash } from '../screens'

const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS

const stack=createNativeStackNavigator()
const drawer=createDrawerNavigator()

const Route = () => {
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
  <drawer.Navigator screenOptions={{headerShown:false,drawerType:'slide',drawerStatusBarAnimation:'fade' ,overlayColor:'transparent',drawerStyle:{width:SCREEN_WIDTH*.6}}}  drawerContent={(props) => <CustomDrawer {...props} />}  >
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
    <drawer.Screen name='MyProfile' component={Myprofile}/>
    <drawer.Screen name='EditProfile' component={EditProfile}/>
    <drawer.Screen name='Membership' component={Membership}/>
    <drawer.Screen name='MembershipDesc' component={MembershipDesc}/>
  </drawer.Navigator>
  )
}

export default Route