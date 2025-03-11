import { View, Text, Image, ImageBackground, SafeAreaView, Pressable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { Barcode, Call, ChevronLeft, ChevronRight, CompassNorthEast, email, Location_White, LocationPin } from '../assets/Images'
import StarComponent from '../components/StarComponent'
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const {Colors}=Constants
const FeatureRenderItem=({item,index})=>{
    return(
        <View style={{backgroundColor:Colors.Black,width:SCREEN_WIDTH*.29,height:SCREEN_HEIGHT*.05,marginHorizontal:SCREEN_WIDTH*.02,flexDirection:'row',alignItems:'center',padding:5}}>
<Image source={item.image} resizeMode='contain' style={{height:SCREEN_WIDTH*.04,width:SCREEN_WIDTH*.04}}/>
<View style={{marginHorizontal:SCREEN_WIDTH*.02}}>
    
    <Text style={{color:Colors.Green1}}>({item.qty}){item.featureName}</Text>
</View>


        </View>
    )
}
const CabanaView = (props) => {
    console.log(props)
  const params=props.route.params
    const navigation=useNavigation()
 
    const HandleNavigation=(name,item)=>{
navigation.navigate(name,item)
    }

    const HeaderComponent=()=>{
        return(
        <ImageBackground source={params.image} style={{width:SCREEN_WIDTH,height:SCREEN_WIDTH*.9}}>
<SafeAreaView>
    <View style={{width:SCREEN_WIDTH*.88,alignSelf:'center'}}>
    <DrawerHeaderComponent name={''} type='expand' search={true}/>
    </View>
</SafeAreaView>
    </ImageBackground>
        )
    }


    const LowerComponent=()=>{
        return(
            <View>
       <ScrollView contentContainerStyle={{paddingBottom:50}} style={{top:-SCREEN_WIDTH*.04,backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT*.51,width:SCREEN_WIDTH,borderRadius:15,zIndex:9}}>
       <View style={{width:SCREEN_WIDTH,alignSelf:'center',overflow:'hidden'}}>
  
       <View style={{width:SCREEN_WIDTH,alignSelf:'center',height:SCREEN_WIDTH*.3,backgroundColor:Colors.Black,borderRadius:15,flexDirection:'row',alignItems:'center',paddingHorizontal:SCREEN_WIDTH*.055,justifyContent:'space-between',paddingTop:SCREEN_WIDTH*.05}} >
<View style={{flexDirection:'row'}}>

<View style={{}}>
    <Text style={{color:Colors.White,fontSize:18,fontFamily:'Gibson',textTransform:'uppercase',marginVertical:SCREEN_WIDTH*.011}}>{params.name}</Text>
    <Text style={{color:Colors.Orange1,fontSize:12,fontFamily:'Gibson',textTransform:'capitalize',marginVertical:SCREEN_WIDTH*.013}}>{params.builder}</Text>
    <Text style={{maxWidth:SCREEN_WIDTH*.6,color:Colors.White,fontSize:12,fontFamily:'Gibson',textTransform:'capitalize',marginVertical:SCREEN_WIDTH*.011}}>Starting Price</Text>

</View>
</View>
<View>
<Text style={{color:Colors.White,fontSize:18,fontFamily:'Gibson',fontWeight:'400',textAlign:'center'}}>{params.size} m²</Text>
<Text style={{color:Colors.Green1,fontSize:8,fontFamily:'Gibson',fontWeight:'400',marginTop:SCREEN_HEIGHT*.01}}><Text style={{fontSize:20}}>{params.price}</Text> QAR</Text>

</View>
    </View>

    <View style={{margin:SCREEN_WIDTH*.05,marginTop:SCREEN_WIDTH*.05}}>
        <View>
        <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,fontWeight:'400',textTransform:'uppercase'}}>Features</Text>
        <FlatList horizontal data={params.features} renderItem={item=><FeatureRenderItem index={item.index} item={item.item}/>}/>

        </View>
        <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,fontWeight:'400',marginTop:SCREEN_HEIGHT*.02}}>LOCATION</Text>
   <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>

   <View style={{flexDirection:'row',alignItems:'center',marginTop:SCREEN_WIDTH*.02}}>

    <Image source={LocationPin} style={{height:SCREEN_WIDTH*.12,width:SCREEN_WIDTH*.12,backgroundColor:Colors.Black, padding:SCREEN_WIDTH*.015,resizeMode:'contain',borderRadius:4}}/>
    <Text style={{lineHeight:19,fontWeight:'400',color:Colors.White_Text,fontSize:14,fontFamily:'Gibson',textTransform:'capitalize',marginLeft:SCREEN_WIDTH*.01,maxWidth:SCREEN_WIDTH*.4}}>{params.address}</Text>
    </View>
    <Image source={CompassNorthEast} style={{height:SCREEN_WIDTH*.08,width:SCREEN_WIDTH*.08,backgroundColor:Colors.Black, padding:SCREEN_WIDTH*.015,resizeMode:'contain',marginTop:SCREEN_WIDTH*.08,borderRadius:4,borderColor:Colors.Green1,borderWidth:.5}}/>

    
    </View>

    </View>
   
    <View style={{marginHorizontal:SCREEN_WIDTH*.05}}>
        <View>
        <Text style={{fontFamily:'Gibson',color:Colors.Orange1,fontSize:16,fontWeight:'400',textTransform:'uppercase'}}>{params.builder} Company</Text>
       
       <View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}} >
       <Text style={{lineHeight:19,fontWeight:'400',color:Colors.White_Text,fontSize:14,fontFamily:'Gibson',textTransform:'capitalize',maxWidth:SCREEN_WIDTH*.4,marginVertical:SCREEN_HEIGHT*.01}}>{params.address}</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between'}} >
   
    <Image source={Call} style={{height:SCREEN_WIDTH*.08,width:SCREEN_WIDTH*.08,backgroundColor:Colors.Black, padding:SCREEN_WIDTH*.015,resizeMode:'contain',borderRadius:4,borderColor:Colors.Green1,borderWidth:0.5,marginHorizontal:SCREEN_WIDTH*.01}}/>
  <Image source={email} style={{height:SCREEN_WIDTH*.08,width:SCREEN_WIDTH*.08,backgroundColor:Colors.Black, padding:SCREEN_WIDTH*.015,resizeMode:'contain',borderRadius:4,borderColor:Colors.Green1,borderWidth:0.5}}/>
    </View>
    </View>
        </View> 
        <Text style={{fontFamily:'Gibson',color:Colors.Green1,fontSize:14,lineHeight:18}}>@{params.builder}</Text>
        </View>
  <View>
  
  
  </View>

    </View>
        </View>
   </ScrollView>
   <Pressable style={{backgroundColor:Colors.Green1,height:SCREEN_WIDTH*.26,top:-SCREEN_WIDTH*.07,zIndex:-1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}onPress={()=>{navigation.navigate('RequestConfirmation')}}>
   {props.type=="Booked"?(
    <>
   <Image source={Barcode} style={{opacity:.5,marginRight:SCREEN_WIDTH*.003}}/> 
   <Text style={{fontFamily:'Gibson',fontWeight:'semibold',fontSize:18,marginHorizontal:SCREEN_WIDTH*.045,textTransform:'uppercase'}}>SCan Barcode</Text>

    </>
   ): (<><Image source={ChevronRight} style={{opacity:.3,marginRight:SCREEN_WIDTH*.003}}/>
   <Image source={ChevronRight} style={{opacity:.5,marginRight:SCREEN_WIDTH*.003}}/> 
   <Image source={ChevronRight} style={{opacity:1,marginRight:SCREEN_WIDTH*.003}}/> 
   <Text style={{fontFamily:'Gibson',fontWeight:'semibold',fontSize:18,marginHorizontal:SCREEN_WIDTH*.045,textTransform:'uppercase'}}>Pay now</Text>
   <Image source={ChevronLeft} style={{opacity:1,marginRight:SCREEN_WIDTH*.003}}/>
   <Image source={ChevronLeft} style={{opacity:.5,marginRight:SCREEN_WIDTH*.003}}/> 
   <Image source={ChevronLeft} style={{opacity:.3,marginRight:SCREEN_WIDTH*.003}}/> 
   </> )     }
    </Pressable>
   </View>
        )
    }
  return (
    <View>
<HeaderComponent/>
<LowerComponent/>

    </View>
  )
}

export default CabanaView