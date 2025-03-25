import { View, Text, Image } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import { CompassNorthEast, LocationPin } from '../assets/Images'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const { Colors } = Constants
const { SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const LocationComponent = ({ address, backgroundColor, header, width,style,map }) => {
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomImageTransform = Utils.ImageTransform(language)
  const CustomAlignItems = Utils.alignItems(language)


  return (
    <View style={[{style}, CustomAlignItems]}>

    {header?  <Text style={{ fontFamily: 'Gibson', color: Colors.White, fontSize: 18, fontWeight: '400', textTransform: 'uppercase' }}>{header}</Text>:null}
{map?<Image source={map}/>:null}
      <View style={[{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: backgroundColor, width: width?width:SCREEN_WIDTH * .95 }, CustomFlexDirection]}>
        <View style={[{ flexDirection: 'row', alignItems: 'center'}, CustomFlexDirection]}>
          <Image source={LocationPin} style={[{ height: SCREEN_WIDTH * .12, width: SCREEN_WIDTH * .12, backgroundColor: Colors.Black, padding: SCREEN_WIDTH * .015, resizeMode: 'contain', borderRadius: 4 }]} />
          <Text style={{ lineHeight: 19, fontWeight: '400', color: Colors.White_Text, fontSize: 14, fontFamily: 'Gibson', textTransform: 'capitalize', marginLeft: SCREEN_WIDTH * .01, maxWidth: SCREEN_WIDTH * .4 }}>{address}</Text>
        </View>
        <Image source={CompassNorthEast} style={[{ height: SCREEN_WIDTH * .08, width: SCREEN_WIDTH * .08, backgroundColor: Colors.Black, padding: SCREEN_WIDTH * .015, resizeMode: 'contain', borderRadius: 4, borderColor: Colors.Green1, borderWidth: .5 }, CustomImageTransform]} />
      </View>
    </View>

  )
}

export default LocationComponent