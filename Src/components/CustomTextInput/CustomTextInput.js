import {View, Text, TextInput} from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from '../../Constants';
const {Colors}=Constants
const CustomTextInput = ({name, type, onChangeText,value,width,error}) => {
  const [IsFocussed, setIsFocussed] = useState(false)
useEffect
  return (
    <View
      style={{
        borderColor:IsFocussed?Colors.Green1: error?'#fa5a5a':Colors.Black,
        borderWidth: 0.7,
        borderRadius: 5,
        height: 60,
        padding: 10,
        paddingHorizontal: 20,
        width:width?width:null,
        backgroundColor:Colors.Black_2
      }}>
      {value?<Text
        style={{
          color: Colors.Green1,
          fontSize: 12,
          fontFamily: 'Gibson-SemiBold',
        }}>
        {name}
      </Text>:null}
      <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
        {type == 'PhoneNumber' &&  value ? (
          <Text
            style={{
              color: Colors.Green1,
              fontSize: 16,
              fontFamily: 'Gibson-Regular',
              marginRight: 10,
            }}>
            +974{' '}
          </Text>
        ) : null}
        <TextInput
        onFocus={()=>{setIsFocussed(true)}}
        onBlur={()=>{setIsFocussed(false)}}
        value={value}
        inputMode= { type == 'PhoneNumber'||type=='size'?'numeric':'default'}
          style={{
            height: 25,
            fontSize: 16,
            fontFamily: 'Gibson',
            width:
              type == 'PhoneNumber'
                ? Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.68
                :type == 'size'?Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.76 :Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.82,
            color: Colors.White,
           
          }}
          onChangeText={onChangeText}
          placeholder={name}
          placeholderTextColor={Colors.White_Text}
        />
        {type == 'size' &&  value ? (
          <Text
            style={{
              color: Colors.White,
              fontSize: 16,
              fontFamily: 'Gibson-Regular',
              alignSelf:'flex-end'
            }}>
            M²
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default CustomTextInput;
