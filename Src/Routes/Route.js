import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer'
import Constants from '../Constants'
import { BookedTicket, BookingSummary, BuildLocations, CabanaView, CabanSizeDetail, ChooseLocation, ChooseServices, CustomBuild, EditProfile, Home, Login, Membership, MembershipDesc, MyActivities, MyBuilds, Myprofile, OtpValidation, ProductPage, RequestConfirmation, ScheduleService, SelectCabanas, ServicesList, ServicesPage, Signup, Splash } from '../screens'
import AboutUs from '../screens/AboutUs'
import Support from '../screens/Support'
import PrivacyPolicy from '../screens/PrivacyPolicy'
import {Provider} from 'react-redux'
import store from '../redux/store'
import LanguageHandler from '../LanguageHandler'

const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const {Colors}=Constants

const stack=createNativeStackNavigator()
const drawer=createDrawerNavigator()
const homestack=createNativeStackNavigator()

const loginStack = () => {
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
const isArabic=LanguageHandler()
  return(
  <drawer.Navigator screenOptions={{headerShown:false,drawerType:'slide',drawerPosition:isArabic?'right':'left',overlayColor:'transparent',drawerStyle:{width:SCREEN_WIDTH*.62}}} drawerContent={(props) => <CustomDrawer {...props} />}  >
      <drawer.Screen name='HomeStack' component={HomeNavigation}/>
    

  

  </drawer.Navigator>
  )
}
const HomeNavigation=()=>{
  return(
    <homestack.Navigator screenOptions={{headerShown:false}}>
      <homestack.Screen name='Home' component={Home}/>
    <homestack.Screen name='ChooseServices' component={ChooseServices}/>
    <homestack.Screen name='ScheduleServices' component={ScheduleService}/>
    <homestack.Screen name='ServicesList' component={ServicesList}/>
    <homestack.Screen name='ProductPage' component={ProductPage}/>
    <homestack.Screen name='BookingSummary' component={BookingSummary}/>
    <homestack.Screen name='MyActivities' component={MyActivities}/>
    <homestack.Screen name='BookedTicket' component={BookedTicket}/>
    <homestack.Screen name='ChooseLocation' component={ChooseLocation}/>
    <homestack.Screen name='CabanSize' component={CabanSizeDetail}/>
    <homestack.Screen name='ServicesPage' component={ServicesPage}/>
    <homestack.Screen name='BuildLocations' component={BuildLocations}/>
    <homestack.Screen name='SelectCabanas' component={SelectCabanas}/>
    <homestack.Screen name='MyBuilds' component={MyBuilds}/>
    <homestack.Screen name='CustomBuild' component={CustomBuild}/>
    <homestack.Screen name='CabanaView' component={CabanaView}/>
    <homestack.Screen name='RequestConfirmation' component={RequestConfirmation}/>
    <homestack.Screen name='MyProfile' component={Myprofile}/>
    <homestack.Screen name='EditProfile' component={EditProfile}/>
    <homestack.Screen name='Membership' component={Membership}/>
    <homestack.Screen name='MembershipDesc' component={MembershipDesc}/>
    <homestack.Screen name='AboutUs' component={AboutUs}/>
    <homestack.Screen name='Support' component={Support}/>
    <homestack.Screen name='PrivacyPolicy' component={PrivacyPolicy}/>
    </homestack.Navigator>
  )
}
const Route=()=>{
return(
  <Provider store={store}>
    {loginStack()}
  </Provider>
)

}
export default Route