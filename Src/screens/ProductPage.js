import { View, Text, Image, ImageBackground, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { ChevronLeft, ChevronRight, CompassNorthEast, Location_White, LocationPin } from '../assets/Images'
import StarComponent from '../components/StarComponent'
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const {Colors}=Constants

const HandleNavigation=(name,item,navigation)=>{
    navigation.navigate(name,item)
        }

const HeaderComponent=({params})=>{
    return(
    <ImageBackground source={params.image} style={{width:SCREEN_WIDTH,height:SCREEN_WIDTH*.9}}>
<SafeAreaView>
<View style={{width:SCREEN_WIDTH*.88,alignSelf:'center'}}>
<DrawerHeaderComponent name={'rent'} type='expand' search={true}/>
</View>
</SafeAreaView>
</ImageBackground>
    )
}

const LowerComponent=({params})=>{
    const navigation=useNavigation()
    return(
        <View>
   <ScrollView contentContainerStyle={{paddingBottom:50}} style={{top:-SCREEN_WIDTH*.04,backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT*.51,width:SCREEN_WIDTH,borderRadius:15,zIndex:9}}>
   <View style={{width:SCREEN_WIDTH,alignSelf:'center',overflow:'hidden'}}>

   <View style={{width:SCREEN_WIDTH,alignSelf:'center',height:SCREEN_WIDTH*.3,backgroundColor:Colors.Black,borderRadius:15,flexDirection:'row',alignItems:'center',paddingHorizontal:SCREEN_WIDTH*.055,justifyContent:'space-between',paddingTop:SCREEN_WIDTH*.05}} >
<View style={{flexDirection:'row'}}>

<View style={{}}>
<Text style={{color:Colors.Green1,fontSize:18,fontFamily:'Gibson',textTransform:'uppercase',marginVertical:SCREEN_WIDTH*.011}}>{params.name}</Text>
<StarComponent maxStars={5} rating={params.rating}/>
<Text style={{color:Colors.Orange1,fontSize:12,fontFamily:'Gibson',textTransform:'capitalize',marginVertical:SCREEN_WIDTH*.013}}>{params.brand}</Text>
<Text style={{maxWidth:SCREEN_WIDTH*.6,color:Colors.Gray_Text,fontSize:12,fontFamily:'Gibson',textTransform:'capitalize',marginVertical:SCREEN_WIDTH*.011}}>{params.model}</Text>

</View>
</View>
<View>
<Text style={{color:Colors.Green1,fontSize:31,fontFamily:'Gibson',fontWeight:'600',textAlign:'center'}}>{params.price}</Text>
<Text style={{color:Colors.Green1,fontSize:12,fontFamily:'Gibson',fontWeight:'600'}}>QAR/hour</Text>

</View>
</View>

<View style={{margin:SCREEN_WIDTH*.05,marginTop:SCREEN_WIDTH*.05}}>
    <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,fontWeight:'400'}}>PICK UP LOCATION</Text>
<View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>

<View style={{flexDirection:'row',alignItems:'center',marginTop:SCREEN_WIDTH*.02}}>

<Image source={LocationPin} style={{height:SCREEN_WIDTH*.12,width:SCREEN_WIDTH*.12,backgroundColor:Colors.Black, padding:SCREEN_WIDTH*.015,resizeMode:'contain',borderRadius:4}}/>
<Text style={{lineHeight:19,fontWeight:'400',color:Colors.White_Text,fontSize:14,fontFamily:'Gibson',textTransform:'capitalize',marginLeft:SCREEN_WIDTH*.01,maxWidth:SCREEN_WIDTH*.4}}>{params.location}</Text>
</View>
<Image source={CompassNorthEast} style={{height:SCREEN_WIDTH*.08,width:SCREEN_WIDTH*.08,backgroundColor:Colors.Black, padding:SCREEN_WIDTH*.015,resizeMode:'contain',marginTop:SCREEN_WIDTH*.08,borderRadius:4,borderColor:Colors.Green1,borderWidth:.5}}/>


</View>

</View>

<View style={{marginHorizontal:SCREEN_WIDTH*.05}}>
    <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,fontWeight:'400',textTransform:'uppercase'}}>Details</Text>
    <Text style={{fontFamily:'Gibson',color:Colors.White_Text,fontSize:14,lineHeight:18,marginTop:SCREEN_WIDTH*.01}}>{params.detail}</Text>
    <Text style={{fontFamily:'Gibson',color:Colors.White_Text,fontSize:14,lineHeight:18,marginTop:SCREEN_WIDTH*.025}}>{params.detailSub}</Text>



</View>
    </View>
</ScrollView>
<Pressable style={{backgroundColor:Colors.Green1,height:SCREEN_WIDTH*.26,top:-SCREEN_WIDTH*.07,zIndex:-1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}onPress={()=>{HandleNavigation('BookingSummary',params,navigation)}}>
<Image source={ChevronRight} style={{opacity:.3,marginRight:SCREEN_WIDTH*.003}}/>
<Image source={ChevronRight} style={{opacity:.5,marginRight:SCREEN_WIDTH*.003}}/> 
<Image source={ChevronRight} style={{opacity:1,marginRight:SCREEN_WIDTH*.003}}/> 
<Text style={{fontFamily:'Gibson',fontWeight:'semibold',fontSize:18,marginHorizontal:SCREEN_WIDTH*.045,textTransform:'uppercase'}}>{params.type=='rent'?"RENT NOW":null}</Text>
<Image source={ChevronLeft} style={{opacity:1,marginRight:SCREEN_WIDTH*.003}}/>
<Image source={ChevronLeft} style={{opacity:.5,marginRight:SCREEN_WIDTH*.003}}/> 
<Image source={ChevronLeft} style={{opacity:.3,marginRight:SCREEN_WIDTH*.003}}/> 
</Pressable>
</View>
    )
}


const ProductPage = (props) => {
    const params=props.route.params
  return (
    <View>
<HeaderComponent params={params}/>
<LowerComponent params={params}/>
    </View>
  )
}

export default ProductPage