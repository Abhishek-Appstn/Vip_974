import { View, Text, Image } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { CrossMark, Tick } from '../assets/Images'
import DataConstants from '../assets/DataConstants'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants
const { successResponse, successResponseSubtext, failedResponse, failedResponseSubtext } = DataConstants

const ConfirmationIcon = ({ status }) => (
  <View style={{ height: SCREEN_WIDTH * .2, width: SCREEN_WIDTH * .2, backgroundColor: Colors.Green1, alignItems: 'center', justifyContent: 'center', padding: SCREEN_WIDTH * .01, borderRadius: SCREEN_WIDTH }}>
    <Image source={status === 'failed' ? CrossMark : Tick} style={{ resizeMode: 'contain' }} />
  </View>
)
const ConfirmationMessage = ({ status }) => (
  <>
    <Text style={{ fontFamily: 'Gibson', fontWeight: 'semibold', fontSize: 18, maxWidth: SCREEN_WIDTH * .4, textTransform: 'uppercase', color: Colors.White, marginTop: SCREEN_HEIGHT * .04, textAlign: 'center' }}> {status == 'failed' ? failedResponse : successResponse}</Text>
    <Text style={{ fontFamily: 'Gibson', fontWeight: 'light', fontSize: 14, alignSelf: 'center', width: SCREEN_WIDTH * .6, color: Colors.White, textAlign: 'center', marginVertical: SCREEN_WIDTH * .04 }}>
      {status == 'failed' ? failedResponseSubtext : successResponseSubtext}
    </Text>
  </>

)

const RequestConfirmation = () => {

  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: Colors.Black, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ backgroundColor: Colors.Black_Bg, width: SCREEN_WIDTH * .8, height: SCREEN_HEIGHT * .45, borderRadius: 15, alignItems: 'center', paddingTop: SCREEN_WIDTH * .078, justifyContent: 'center', alignSelf: 'center', paddingVertical: SCREEN_HEIGHT * .05 }}>
        {/* <View style={{ backgroundColor: Colors.Black_Bg,  }}> */}
        <ConfirmationIcon />
        <ConfirmationMessage />
        <CustomButton width={SCREEN_WIDTH * .55} title="My Builds" onPress={() => { navigation.navigate("MyBuilds") }} />
      </View>
    </View>
  )
}

export default RequestConfirmation