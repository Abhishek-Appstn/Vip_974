import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Constants from '../../Constants';

const CustomTextInput = ({name, type, onChangeText, borderColor, value}) => {
  return (
    <View
      style={{
        borderColor: borderColor,
        borderWidth: 0.7,
        borderRadius: 5,
        height: 60,
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor:Constants.Colors.Black_2
      }}>
      {value?<Text
        style={{
          color: Constants.Colors.Green1,
          fontSize: 12,
          fontFamily: 'Gibson-SemiBold',
        }}>
        {name}
      </Text>:null}
      <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
        {type == 'PhoneNumber' &&  value ? (
          <Text
            style={{
              color: Constants.Colors.Green1,
              fontSize: 16,
              fontFamily: 'Gibson-Regular',
              marginRight: 10,
            }}>
            +974{' '}
          </Text>
        ) : null}
        <TextInput
          style={{
            height: 25,
            fontSize: 16,
            fontFamily: 'Gibson',
            width:
              type == 'PhoneNumber'
                ? Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.68
                : Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.82,
            color: Constants.Colors.White,
           
          }}
          onChangeText={onChangeText}
          placeholder={name}
          placeholderTextColor={Constants.Colors.White_Text}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
