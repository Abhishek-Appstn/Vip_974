import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const CabanaListRenderItem = ({ item, index, list }) => {
  const navigation = useNavigation()
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomTextAlign = Utils.textAlign(language)

  return (
    <Pressable style={{ backgroundColor: Colors.Black_Bg, marginVertical: SCREEN_HEIGHT * .008, overflow: 'hidden', borderRadius: SCREEN_WIDTH * .02, flex: 1, }} onPress={() => navigation.navigate('CabanaView', item)}>

      <Image source={item.images[0]} style={{ resizeMode: 'cover', height: SCREEN_HEIGHT * .19, width: SCREEN_WIDTH * .9, alignSelf: 'center' }} />
      <View style={{}}>

        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: SCREEN_HEIGHT * .01, borderColor: Colors.Gray_Text, borderBottomWidth: .17, marginHorizontal: SCREEN_WIDTH * .04 }, CustomFlexDirection]}>
          <View style={{}}>
            <Text style={[{ color: Colors.White, fontSize: 18, textTransform: 'uppercase', fontWeight: '600', marginBottom: SCREEN_HEIGHT * .004, marginTop: SCREEN_HEIGHT * .01 }, CustomTextAlign]}>{item.name}</Text>
            <Text style={[{ color: Colors.Orange1, fontSize: 12, textTransform: 'capitalize' }, CustomTextAlign]}>{item.builder}</Text>
          </View>
          <Text style={{ color: Colors.White, fontSize: 18, fontWeight: '600' }}>{item.size} m²</Text>
        </View>
        <View style={[{ flexDirection: 'row', marginTop: SCREEN_HEIGHT * .01, justifyContent: 'space-between', paddingHorizontal: SCREEN_WIDTH * .045, alignItems: 'flex-end', marginBottom: SCREEN_HEIGHT * .01 }, CustomFlexDirection]}>
          <Text style={{ color: Colors.White, fontSize: 12, textTransform: 'capitalize' }}>{item.type === 'booked' ? item?.bookedDate : 'Starting Price'}</Text>
          <Text style={{ color: Colors.Green1, fontSize: 18, fontWeight: '600' }}>{item.price} <Text style={{ fontSize: 12 }}>QAR</Text></Text>
        </View>
      </View>
    </Pressable>
  )
}

export default CabanaListRenderItem