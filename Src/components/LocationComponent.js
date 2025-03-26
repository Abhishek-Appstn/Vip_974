import { View, Text, Image, Pressable, Platform, Linking } from 'react-native'
import React, { useRef } from 'react'
import Constants from '../Constants'
import { CompassNorthEast, LocationPin } from '../assets/Images'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
import IconComponent from './IconComponent'
import ActionSheet from 'react-native-actions-sheet'
const { Colors } = Constants
const { SCREEN_HEIGHT,SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const navigateToLocation=(mapname='')=>{
const latitude = 8.5806174;
const longitude = 76.8768036;
const gmapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
const appleMapsUrl = `http://maps.apple.com/?ll=${latitude},${longitude}&q=${latitude},${longitude}`;
Linking.openURL(mapname==='gmaps'?gmapsUrl:appleMapsUrl).catch(err=>{throw err})
}

const LocationComponent = ({ address, backgroundColor, header, width, style, map }) => {
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomImageTransform = Utils.ImageTransform(language)
  const CustomAlignItems = Utils.alignItems(language)
const MapRef=useRef()
const CustomActionSheet=()=>{
  return(
<ActionSheet containerStyle={{height:SCREEN_HEIGHT*.2,backgroundColor:Colors.Black_Bg,padding:SCREEN_HEIGHT*.02}} ref={MapRef}>
  <Pressable style={{marginVertical:SCREEN_HEIGHT*.02}} onPress={()=>{navigateToLocation('gmaps'),MapRef?.current?.hide()}}>
    <Text style={{color:Colors.White,fontSize:16,fontFamily:"Gibson"}}>Open in Google Maps</Text>
  </Pressable>
  {Platform.OS==='ios'?
  <Pressable style={{marginVertical:SCREEN_HEIGHT*.02}}onPress={()=>{navigateToLocation(),MapRef?.current?.hide()}} >
    <Text style={{color:Colors.White,fontSize:16,fontFamily:"Gibson"}}>Open in Apple Maps</Text>
  </Pressable>:null}
</ActionSheet>
  )
}

  return (
    <View style={[style, CustomAlignItems]}>

      {header ? <Text style={{ fontFamily: 'Gibson', color: Colors.White, fontSize: 18, fontWeight: '400', textTransform: 'uppercase' }}>{header}</Text> : null}
      {map ? <Image source={map} /> : null}
      <View style={[{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: backgroundColor, width: width ? width : SCREEN_WIDTH * .95 }, CustomFlexDirection]}>
        <View style={[{ flexDirection: 'row', alignItems: 'center' }, CustomFlexDirection]}>
         <IconComponent image={LocationPin} style={{height: SCREEN_WIDTH * .12, width: SCREEN_WIDTH * .12,borderWidth:0}} imageStyle={{height:SCREEN_WIDTH*.09,width:SCREEN_WIDTH*.09,resizeMode:'contain'}}/>
          <Text style={{ lineHeight: 19, fontWeight: '400', color: Colors.White_Text, fontSize: 14, fontFamily: 'Gibson', textTransform: 'capitalize', marginLeft: SCREEN_WIDTH * .01, maxWidth: SCREEN_WIDTH * .4 }}>{address}</Text>
        </View>
       <IconComponent image={CompassNorthEast} style={{height: SCREEN_WIDTH * .08, width: SCREEN_WIDTH * .08,padding:SCREEN_HEIGHT*.02}} onPress={()=>MapRef.current?.show()}/>
      </View>
    <CustomActionSheet/>
    </View>

  )
}

export default LocationComponent