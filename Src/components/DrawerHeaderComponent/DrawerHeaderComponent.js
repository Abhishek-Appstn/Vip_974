import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
import { ArrowLeft, Drawer, Expand, Filter, Search } from '../../assets/Images'
import { useNavigation } from '@react-navigation/native'
import Utils from '../../Utils'
import { useSelector } from 'react-redux'

const DrawerHeaderComponent = ({name,leftimage,rightimage,type,search,back,active,setactive,setVisible}) => {
    const{Colors} =Constants
    const{SCREEN_HEIGHT,SCREEN_WIDTH} =Constants.SCREEN_DIMENSIONS
    const navigation=useNavigation()
    const language=useSelector(state=>state.Language.value)
    const CustomImageTransform=Utils.ImageTransform(language)
    const CustomFlexDirection=Utils.flexDirection(language)

    return (
    <View style={[{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'},CustomFlexDirection]}>
                <Pressable onPress={()=>{back?back():type=='login'||type=='filter'||type=="expand"?navigation.goBack():navigation.toggleDrawer()}}>

              <Image style={[CustomImageTransform]} source={type=='login'||type=='filter'||type=='expand'?ArrowLeft:leftimage?leftimage:Drawer}/>

                    </Pressable>  
                   <Text style={[{color:Colors.White_Text,fontSize:17,fontFamily:'Gibson-SemiBold',textTransform:'uppercase'}]}>{name}</Text>
              <View style={{flexDirection:'row'}}>
                {type=='filter'?<Image source={Filter} style={{marginRight:SCREEN_WIDTH*.04}}/>:null}
                {type=='expand'?<Pressable onPress={()=>setVisible(true)}><Image source={Expand} style={{marginRight:SCREEN_WIDTH*.04}}/></Pressable>:null}
                <Pressable onPress={()=>{back?back():type=='login'||type=='filter'||type=="expand"?navigation.goBack():navigation.toggleDrawer()}}>


                    </Pressable>  
                   {!search?<Image source={rightimage?rightimage:Search}/>:<View style={{}}></View>}
                   </View>
               </View>
  )
}

export default DrawerHeaderComponent