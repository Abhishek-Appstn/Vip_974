import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer'
import Constants from '../Constants'
import { BookedTicket, BookingSummary, BuildLocations, CabanaView, CabanSizeDetail, ChooseLocation, ChooseServices, CustomBuild, EditProfile, Home, Login, Membership, MembershipDesc, MyActivities, MyBuilds, Myprofile, OtpValidation, ProductPage, RequestConfirmation, ScheduleService, SelectCabanas, ServicesList, ServicesPage, Signup, Splash } from '../screens'
import AboutUs from '../screens/AboutUs'
import Support from '../screens/Support'
import PrivacyPolicy from '../screens/PrivacyPolicy'
import { Provider, useSelector } from 'react-redux'
import store from '../redux/store'
import ErrorBoundary from 'react-native-error-boundary'
import AdminHome from '../screens/AdminHome'
import AdminAddProduct from '../screens/AdminAddProduct'
import { Image, SafeAreaView, StatusBar, View } from 'react-native'
import DrawerSceneContainer from '../components/DrawerSceneContainer'
import { DrawerUpperImage } from '../assets/Images'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const stack = createNativeStackNavigator()
const drawer = createDrawerNavigator()
const homestack = createNativeStackNavigator()
const LoginStack = () => {
  const [loading, setloading] = useState(true)
  const isloggedin = useSelector(state => state.User.isloggedin)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1500);
  }, [isloggedin])

  return (

    <NavigationContainer>
      <StatusBar translucent backgroundColor={"transparent"} />
      <stack.Navigator screenOptions={{ headerShown: false }}>
        {loading ?
          <stack.Screen name='Splash' component={Splash} />
          : null}
        {!isloggedin ?
          <>
            <stack.Screen name='Login' component={Login} />
            <stack.Screen name='OtpValidation' component={OtpValidation} />
            <stack.Screen name='Signup' component={Signup} />
          </>
          :
          <stack.Screen name='Drawer' component={DrawerNavigation} />
        }

      </stack.Navigator>
    </NavigationContainer>
  )
}

const DrawerNavigation = () => {
  const language = useSelector(state => state.Language.value)

  return (

    <drawer.Navigator screenOptions={{ headerShown: false, drawerType: 'slide', overlayColor: 'transparent', drawerPosition: language === 'Arabic' ? 'right' : 'left', drawerStyle: { width: SCREEN_WIDTH * .62, } }} drawerContent={(props) => {


      return <CustomDrawer {...props} />
    }}  >
      <drawer.Screen name='HomeStack' component={HomeNavigation} />
    </drawer.Navigator>

  )
}
const AnimatedStyle = (Component) => {
  return (props) => (
    <View style={{ flex: 1, backgroundColor: Colors.Black_Bg }}>
      <Image source={DrawerUpperImage} style={{ position: 'absolute', left: SCREEN_WIDTH * .2 }} />
      <DrawerSceneContainer>
        <Component {...props} />
      </DrawerSceneContainer>
    </View>

  )
}


const HomeNavigation = () => {
  // const DrawerProgress = useDrawerProgress()
  // const animatedStyle = useAnimatedStyle(() => {
  //   const scale = interpolate(DrawerProgress.value, [0, 1], [1, 0.63]);
  //   const borderRadius = interpolate(DrawerProgress.value, [0, 1], [0, SCREEN_HEIGHT * 0.03]);

  //   return {
  //     transform: [{ scale }],
  //     borderRadius,
  //   };
  // });
  return (
    // <View style={{ flex: 1, backgroundColor: Colors.Black_Bg }}>
    //   <Image source={DrawerUpperImage} style={{ position: 'absolute', left: SCREEN_WIDTH * .2 }} />

    //   <Animated.View style={[{ flex: 1 }, animatedStyle]}>
    <homestack.Navigator screenOptions={{ headerShown: false }}>
      <homestack.Screen name='Home' component={AnimatedStyle(Home)} />
      <homestack.Screen name='ChooseServices' component={ChooseServices} />
      <homestack.Screen name='ScheduleServices' component={ScheduleService} />
      <homestack.Screen name='ServicesList' component={ServicesList} />
      <homestack.Screen name='ProductPage' component={ProductPage} options={{ animation: 'slide_from_bottom', animationDuration: 300 }} />
      <homestack.Screen name='BookingSummary' component={BookingSummary} />
      <homestack.Screen name='MyActivities' component={MyActivities} />
      <homestack.Screen name='BookedTicket' component={BookedTicket} />
      <homestack.Screen name='ChooseLocation' component={ChooseLocation} />
      <homestack.Screen name='CabanSize' component={CabanSizeDetail} />
      <homestack.Screen name='ServicesPage' component={ServicesPage} />
      <homestack.Screen name='BuildLocations' component={BuildLocations} />
      <homestack.Screen name='SelectCabanas' component={SelectCabanas} />
      <homestack.Screen name='MyBuilds' component={MyBuilds} />
      <homestack.Screen name='CustomBuild' component={CustomBuild} />
      <homestack.Screen name='CabanaView' component={CabanaView} options={{ animation: 'slide_from_bottom', animationDuration: 300 }} />
      <homestack.Screen name='RequestConfirmation' component={RequestConfirmation} />
      <homestack.Screen name='MyProfile' component={Myprofile} />
      <homestack.Screen name='EditProfile' component={EditProfile} />
      <homestack.Screen name='Membership' component={Membership} />
      <homestack.Screen name='MembershipDesc' component={MembershipDesc} />
      <homestack.Screen name='AboutUs' component={AboutUs} />
      <homestack.Screen name='Support' component={Support} />
      <homestack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
      <homestack.Screen name='AdminHome' component={AdminHome} />
      <homestack.Screen name='AdminAddProduct' component={AdminAddProduct} />



    </homestack.Navigator>
    //   </Animated.View>

    // </View>
  )
}

const Route = () => {

  return (

    <Provider store={store}>
      <ErrorBoundary>
        <LoginStack />

      </ErrorBoundary>
    </Provider>
  )

}
export default Route