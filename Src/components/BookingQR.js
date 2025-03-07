import { View, Text, Pressable, FlatList } from 'react-native'
import React, { forwardRef, useRef } from 'react'
import ActionSheet from 'react-native-actions-sheet'
import Constants from '../Constants'

const BookingQR = forwardRef((ref) => {
    const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const{Colors}=Constants
    const ActionsheetRef=useRef()

  return (
          <ActionSheet closable={true} containerStyle={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT*.9}}  ref={ActionsheetRef}>
          <View style={{marginTop:10,marginHorizontal:SCREEN_WIDTH*.07,}}>
            
            <View
              style={{
                width: 40,
                height: 5,
                backgroundColor: '#ccc',
                borderRadius: 2.5,
                alignSelf: 'center',
                marginVertical: 10,
              }}
            />
            <Pressable style={{position:'absolute',right:5,top:3}} onPress={()=>ActionsheetRef.current?.hide()}>
            <Image source={CrossMark} />
    
            </Pressable>
    
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{textTransform:'uppercase',color:Colors.White,fontFamily:'Gibson',fontSize:18,fontWeight:'400'}}>{Choosen=='Drinks Box'?'Drinks Box':'Home Businesses'}</Text>
            <Text style={{color:Colors.Green1,fontFamily:'Gibson',fontSize:12}}>(3) Items</Text>
            </View>
      </View>









    
      </ActionSheet>
        )
      })

export default BookingQR