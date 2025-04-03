import React, { useEffect, useState } from 'react'
import { FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import CustomTextInput from '../components/CustomTextInput/CustomTextInput'
import CustomButton from '../components/CustomButton/CustomButton'
import Constants from '../Constants'
import { Cameraicon, Logo_White, Profile_Damu } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import Animated from 'react-native-reanimated'
import ImageCropPicker from 'react-native-image-crop-picker'
import DataConstants from '../assets/DataConstants'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../redux/slice/UserSlice'
import Snackbar from 'react-native-snackbar'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants
const profileImage = Profile_Damu

const handleImageSelection = () => {
  return (
    ImageCropPicker.openPicker({
      cropping: true
    }).then(image => console.log("Image received", image))
  )
}

const ProfileImage = () => {
  const UserImage = useSelector(state => state.User.profileImage)
  return (
    <View style={{ borderColor: Colors.Green1, borderWidth: 1, height: SCREEN_WIDTH * .3, width: SCREEN_WIDTH * .3, borderRadius: SCREEN_HEIGHT, overflow: 'hidden', alignItems: "center", justifyContent: 'center', alignSelf: 'center', marginVertical: SCREEN_HEIGHT * .04 }}>
      <Image style={{ height: SCREEN_WIDTH * .28, width: SCREEN_WIDTH * .28, overflow: 'hidden', resizeMode: 'cover', borderRadius: SCREEN_HEIGHT }} source={UserImage} />
      <View
        style={{
          position: "absolute",
          height: SCREEN_WIDTH * 0.3,
          width: SCREEN_WIDTH * 0.3,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: SCREEN_HEIGHT,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable style={{ padding: SCREEN_WIDTH * .01, backgroundColor: Colors.Black_Bg, borderRadius: SCREEN_WIDTH, width: SCREEN_WIDTH * .12, height: SCREEN_WIDTH * .12, alignItems: 'center', justifyContent: 'center' }} onPress={handleImageSelection} ><Image source={Cameraicon} style={{ height: SCREEN_HEIGHT * .05, width: SCREEN_WIDTH * .07 }} resizeMode='contain' /></Pressable>
      </View>
    </View>
  )
}
const EditProfile = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { firstname, lastname, email, mobileNumber, qid } = useSelector(state => state.User)
  const [FormData, setFormData] = useState({
    FirstName: firstname,
    LastName: lastname,
    Email: email,
    Phone: mobileNumber,
    Qid: qid
  })

  const data = [
    { name: 'First Name', key: 'FirstName' },
    { name: 'Last Name', key: 'LastName' },
    { name: 'Email', key: 'Email' },
    { name: 'Phone', key: 'Phone' },
    { name: 'Qid', key: 'Qid' },
  ]
  console.log("FOrm", FormData)
  console.log("USer", firstname, lastname, email, mobileNumber, qid)
  const HandleNavigation = ({ screen, dispatch }) => {
    try {
      dispatch(setUserData({
        firstname: FormData?.FirstName,
        lastname: FormData?.LastName,
        email: FormData?.Email,
        mobileNumber: FormData?.Phone,
        qid: FormData?.Qid
      }))
      Snackbar.show({ text: "Details Updated Successfully", backgroundColor: "green" })
      navigation.navigate(screen)
    } catch (error) {
      Snackbar.show({ text: error, backgroundColor: 'red' })
      throw error
    }
  }
  const handleTextChange = (text, key) => {
    setFormData({
      ...FormData,
      [key]: text
    }
    )
  }
  return (

    <SafeAreaView
      style={{
        justifyContent: 'center',
        height: SCREEN_HEIGHT,
        backgroundColor: Colors.Black_Bg
      }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: SCREEN_WIDTH * .05 }}>
        <DrawerHeaderComponent type={'login'} name="Edit Profile" search={true} />
        <ProfileImage />
        <FlatList showsVerticalScrollIndicator={false} scrollEnabled={false} data={data} renderItem={({ item, index }) => {
          return (
            <View style={{ marginTop: 20, marginBottom: 10 }}>
              <CustomTextInput value={FormData[item.key]} placeholder={item.name} name={item.name} type={item.name == 'Phone' ? "PhoneNumber" : null} onChangeText={text => handleTextChange(text, item.key)} />
            </View>
          )

        }} />
        <View style={{ marginTop: 30 }}>
          <CustomButton title={'Save'} onPress={() => HandleNavigation({ screen: 'Home', dispatch: dispatch })} />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default EditProfile