import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
import { Background_Icon, Logo_White } from '../../assets/Images'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const Layout = ({ children, logoStyles }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.Black_Bg }}>
      <Image style={[{ position: 'absolute', opacity: .45, resizeMode: "contain", alignSelf: 'flex-end' }, logoStyles]} source={Background_Icon} />
      {children}
    </View>
  )
}
export default Layout