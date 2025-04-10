// import { View, Text, TextInput, Platform, KeyboardAvoidingView, TouchableNativeFeedback, TouchableWithoutFeedback, Keyboard } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import Constants from '../../Constants';
// import { useSelector } from 'react-redux';
// import Utils from '../../Utils';
// const { Colors } = Constants
// const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

// const CustomTextInput = ({ name, type, onChangeText, value, width, error, multiline }) => {
//   const [IsFocussed, setIsFocussed] = useState(false)
//   const language = useSelector(state => state.Language.value)
//   const CustomFlexDirection = Utils.alignSelf(language)
//   const CustomTextAlign = Utils.textAlign(language)
//   useEffect
//   return (
//     <>
//       <View
//         style={[{
//           borderColor: IsFocussed ? Colors.Green1 : error ? '#fa5a5a' : Colors.Black,
//           borderWidth: 0.7,
//           borderRadius: 5,
//           height: multiline ? SCREEN_HEIGHT * .16 : SCREEN_HEIGHT * .07,
//           paddingVertical: Platform.OS === 'android' ? SCREEN_HEIGHT * .002 : SCREEN_HEIGHT * .007,
//           paddingHorizontal: SCREEN_WIDTH * .04,
//           width: width ? width : SCREEN_WIDTH * .9,
//           backgroundColor: Colors.Black_2,
//         },]}>
//         {IsFocussed || value ? <Text
//           style={[{
//             color: Colors.Green1,
//             fontSize: 12,
//             fontFamily: 'Gibson-SemiBold',
//           }, CustomTextAlign]}>
//           {name}
//         </Text> : null}
//         <View style={[{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }, CustomFlexDirection]}>
//           {type === 'PhoneNumber' && (IsFocussed || value) ? (
//             <Text
//               style={[{
//                 color: Colors.Green1,
//                 fontSize: 16,
//                 fontFamily: 'Gibson-Regular',
//                 marginHorizontal: 10,
//               }, CustomTextAlign]}>
//               +974{' '}
//             </Text>
//           ) : null}
//           <TextInput
//             onFocus={() => { setIsFocussed(true) }}
//             onBlur={() => { setIsFocussed(false) }}
//             value={value}
//             inputMode={type == 'PhoneNumber' || type == 'size' ? 'numeric' : 'default'}
//             style={[{
//               height: multiline ? SCREEN_HEIGHT * .13 : Platform.OS === 'ios' ? SCREEN_HEIGHT * .032 : null,
//               flex: 1,
//               fontSize: 16,
//               fontFamily: 'Gibson',
//               alignSelf: 'flex-start',
//               width:
//                 type == 'PhoneNumber'
//                   ? SCREEN_WIDTH * 0.68
//                   : type == 'size' ? SCREEN_WIDTH * 0.76 : SCREEN_WIDTH * 0.82,
//               color: Colors.White,

//             }, CustomTextAlign]}
//             onChangeText={onChangeText}
//             multiline={multiline}
//             placeholder={!IsFocussed ? name : null}
//             placeholderTextColor={Colors.White_Text}
//           />
//           {type == 'size' && (IsFocussed || value) ? (
//             <Text
//               style={{
//                 color: Colors.White,
//                 fontSize: 16,
//                 fontFamily: 'Gibson-Regular', marginHorizontal: SCREEN_WIDTH * .01
//               }}>
//               M²
//             </Text>
//           ) : null}
//         </View>
//       </View>
//       <View style={{ height: SCREEN_HEIGHT * .02 }}>
//         {error ?
//           <Text style={{ color: 'red' }}>Invalid Input</Text> : null}
//       </View>
//     </>

//   );
// };

// export default CustomTextInput;


import { View, Text, StatusBar, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing
} from 'react-native-reanimated'
import Constants from '../../Constants'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS


const CustomTextInput = ({
  name = 'Label',
  containerStyle,
  inputStyle,
  labelStyle,
  type, onChangeText, width, error, multiline, value
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const labelPosition = useSharedValue(0)
  const labelScale = useSharedValue(1)
  // const [value, setValue] = useState('')
  const inputRef = useRef()

  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: labelPosition.value },
        { scale: labelScale.value }
      ],
    }
  })

  const handleFocus = () => {
    setIsFocused(true)
    labelPosition.value = withTiming(-SCREEN_HEIGHT * .02, {
      duration: 200,
      easing: Easing.out(Easing.ease)
    })
    labelScale.value = withTiming(0.8, {
      duration: 200,
      easing: Easing.out(Easing.ease)
    })
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (!value) {
      labelPosition.value = withTiming(0, {
        duration: 200,
        easing: Easing.out(Easing.ease)
      })
      labelScale.value = withTiming(1, {
        duration: 200,
        easing: Easing.out(Easing.ease)
      })
    }
  }

  return (
    <>
      <View style={[{
        width: width ? width : SCREEN_WIDTH * .9,
        alignSelf: 'center',
        height: SCREEN_HEIGHT * .07,
        justifyContent: 'center',
        backgroundColor: Colors.Black,
        borderRadius: 10, overflow: 'hidden',
        borderWidth: 1, borderColor: isFocused ? Colors.Green1 : null
      }, containerStyle]}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end',  paddingHorizontal: SCREEN_WIDTH * .02, flex: 1, }}>
          {(isFocused || value) && type == 'PhoneNumber' ? <TextInput style={{ color: Colors.Green1, fontSize: 16, fontFamily: 'Gibson', }} value='+974'></TextInput> : null}
          <TextInput
            ref={inputRef}
            onChangeText={onChangeText}
            style={[{
              flex: 1, paddingHorizontal: SCREEN_WIDTH * .01,
              fontSize: 16, fontFamily: 'Gibson',
              color: '#fff',
            }, inputStyle]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
          />
          {(isFocused || value) && type == 'PhoneNumber' ? <Text style={{ color: Colors.Green1 }}>M2</Text> : null}
        </View>
        <Animated.Text
          style={[{
            position: 'absolute',
            color: Colors.Green1, left: SCREEN_WIDTH * .02
          }, labelStyle, animatedLabelStyle]}
          onPress={() => inputRef.current.focus()}
        >
          {name}
        </Animated.Text>

      </View>

      {error ? <View style={{}}>

        <Text style={{ color: 'red' }}>Invalid Input</Text>
      </View>
        : null}
    </>
  )
}

export default CustomTextInput
