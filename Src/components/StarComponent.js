import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Star_Filled_Yellow, Star_outline} from '../assets/Images';

const StarComponent = ({maxStars, rating}) => {
  useEffect(() => {
    setRating(rating)
  }, [rating])
  
  const [Rating, setRating] = useState(rating);
  console.log("Rate",Rating)
  // const handlePress=(index)=>{
  //     index===Rating?
  //     setRating(0):
  //     setRating(index)
  // }
  return (
    <View style={{flexDirection: 'row', justifyContent: ''}}>
      {Array.from({length: maxStars}).map((_, index) => (
        <Pressable>
          {index < Rating ? (
            <Image
              key={index}
              source={Star_Filled_Yellow}
              style={{marginLeft: index !== 0 ? 5 : 0, height: 14, width: 14}}
            />
          ) : (
            <Image
              key={index}
              source={Star_outline}
              style={{marginLeft: index !== 0 ? 5 : 0, height: 14, width: 14}}
            />
          )}
        </Pressable>
      ))}
    </View>
  );
};

export default StarComponent;
