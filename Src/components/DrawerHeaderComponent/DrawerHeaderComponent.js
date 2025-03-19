import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
import { ArrowLeft, Drawer, Expand, Filter, Search } from '../../assets/Images'
import { useNavigation } from '@react-navigation/native'
import LanguageHandler from '../../LanguageHandler'

const DrawerHeaderComponent = ({name,leftimage,rightimage,type,search,back,active,setactive}) => {
    const{Colors} =Constants
    const{SCREEN_HEIGHT,SCREEN_WIDTH} =Constants.SCREEN_DIMENSIONS
    const navigation=useNavigation()
const isArabic=LanguageHandler()
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                <Pressable onPress={()=>{back?back():type=='login'||type=='filter'||type=="expand"?navigation.goBack():navigation.toggleDrawer()}}>
               {type==null ? !isArabic? <Image source={type=='login'||type=='filter'||type=='expand'?ArrowLeft:leftimage?leftimage:Drawer}/>:null: <Image source={type=='login'||type=='filter'||type=='expand'?ArrowLeft:leftimage?leftimage:Drawer}/>}
                    </Pressable>  
                   <Text style={{color:Colors.White_Text,fontSize:17,fontFamily:'Gibson-SemiBold',textTransform:'uppercase'}}>{name}</Text>
              <View style={{flexDirection:'row'}}>
                {type=='filter'?<Image source={Filter} style={{marginRight:SCREEN_WIDTH*.04}}/>:null}
                {type=='expand'?<Image source={Expand} style={{marginRight:SCREEN_WIDTH*.04}}/>:null}
                <Pressable onPress={()=>{back?back():type=='login'||type=='filter'||type=="expand"?navigation.goBack():navigation.toggleDrawer()}}>
                {type==null && isArabic? <Image source={type=='login'||type=='filter'||type=='expand'?ArrowLeft:leftimage?leftimage:Drawer}/>:null}
                    </Pressable>  
                   {!search?<Image source={rightimage?rightimage:Search}/>:<View style={{}}></View>}
                   </View>
               </View>
  )
}

export default DrawerHeaderComponent