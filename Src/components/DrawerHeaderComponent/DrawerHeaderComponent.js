import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
import { ArrowLeft, Drawer, Search } from '../../assets/Images'
import { useNavigation } from '@react-navigation/native'

const DrawerHeaderComponent = ({name,leftimage,rightimage,type,search}) => {
    const{Colors} =Constants
    const{SCREEN_HEIGHT,SCREEN_WIDTH} =Constants.SCREEN_DIMENSIONS
    const navigation=useNavigation()

  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                <Pressable onPress={()=>{type=='login'?navigation.goBack():navigation.toggleDrawer()}}>
                <Image source={type=='login'?ArrowLeft:leftimage?leftimage:Drawer}/>
                    </Pressable>  
                   <Text style={{color:Colors.White_Text,fontSize:17,fontFamily:'Gibson-SemiBold',textTransform:'uppercase'}}>{name}</Text>
                   {!search?<Image source={rightimage?rightimage:Search}/>:<View style={{}}></View>}
               </View>
  )
}

export default DrawerHeaderComponent