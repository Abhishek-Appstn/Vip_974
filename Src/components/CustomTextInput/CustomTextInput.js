import { View, Text, TextInput, Platform, KeyboardAvoidingView, TouchableNativeFeedback, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from '../../Constants';
import { useSelector } from 'react-redux';
import Utils from '../../Utils';
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const CustomTextInput = ({ name, type, onChangeText, value, width, error, multiline }) => {
  const [IsFocussed, setIsFocussed] = useState(false)
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.alignSelf(language)
  const CustomTextAlign = Utils.textAlign(language)
  useEffect
  return (
    <>
      <View
        style={[{
          borderColor: IsFocussed ? Colors.Green1 : error ? '#fa5a5a' : Colors.Black,
          borderWidth: 0.7,
          borderRadius: 5,
          height: multiline ? SCREEN_HEIGHT * .16 : SCREEN_HEIGHT * .07,
          paddingVertical: Platform.OS === 'android' ? SCREEN_HEIGHT * .002 : SCREEN_HEIGHT * .007,
          paddingHorizontal: SCREEN_WIDTH * .04,
          width: width ? width : null,
          backgroundColor: Colors.Black_2,
        },]}>
        {IsFocussed || value ? <Text
          style={[{
            color: Colors.Green1,
            fontSize: 12,
            fontFamily: 'Gibson-SemiBold',
          }, CustomTextAlign]}>
          {name}
        </Text> : null}
        <View style={[{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }, CustomFlexDirection]}>
          {type === 'PhoneNumber' && (IsFocussed || value) ? (
            <Text
              style={[{
                color: Colors.Green1,
                fontSize: 16,
                fontFamily: 'Gibson-Regular',
                marginHorizontal: 10,
              }, CustomTextAlign]}>
              +974{' '}
            </Text>
          ) : null}
          <TextInput
            onFocus={() => { setIsFocussed(true) }}
            onBlur={() => { setIsFocussed(false) }}
            value={value}
            inputMode={type == 'PhoneNumber' || type == 'size' ? 'numeric' : 'default'}
            style={[{
              height: multiline ? SCREEN_HEIGHT * .13 : Platform.OS === 'ios' ? SCREEN_HEIGHT * .032 : SCREEN_HEIGHT * .045,
              fontSize: 16,
              fontFamily: 'Gibson',
              alignSelf: 'flex-start',
              width:
                type == 'PhoneNumber'
                  ? SCREEN_WIDTH * 0.68
                  : type == 'size' ? SCREEN_WIDTH * 0.76 : SCREEN_WIDTH * 0.82,
              color: Colors.White,

            }, CustomTextAlign]}
            onChangeText={onChangeText}
            multiline={multiline}
            placeholder={!IsFocussed ? name : null}
            placeholderTextColor={Colors.White_Text}
          />
          {type == 'size' && value ? (
            <Text
              style={{
                color: Colors.White,
                fontSize: 16,
                fontFamily: 'Gibson-Regular', marginHorizontal: SCREEN_WIDTH * .01
              }}>
              M²
            </Text>
          ) : null}
        </View>
      </View>
      <View style={{ height: SCREEN_HEIGHT * .02 }}>
        {error ?
          <Text style={{ color: 'red' }}>Invalid Input</Text> : null}
      </View>
    </>

  );
};

export default CustomTextInput;
