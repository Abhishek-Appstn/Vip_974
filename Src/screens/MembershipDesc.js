import { View, Text, SafeAreaView, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AnimatedCircularProgress} from 'react-native-circular-progress'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { king } from '../assets/Images'
import DataConstants from '../assets/DataConstants'
const {Colors}=Constants
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS

const FillCalculator=({progress,maxProgress})=>{
return (progress/maxProgress)*100
}
const BenefitRenderItem=({item,index})=>{
    return(
        <View style={{width:SCREEN_WIDTH*.9,backgroundColor:Colors.Black_M,marginVertical:SCREEN_HEIGHT*.01,flexDirection:'row',padding:SCREEN_WIDTH*.04,alignItems:'center',borderRadius:SCREEN_WIDTH*.02}}>
           <View style={{backgroundColor:Colors.Star_Yellow,height:SCREEN_HEIGHT*.05,width:SCREEN_WIDTH*.1,alignItems:'center',justifyContent:'center',borderRadius:SCREEN_WIDTH*.03}}>
           <Image source={item.image}/>
           </View>
           <View style={{marginLeft:SCREEN_WIDTH*.04}}>
            <Text style={{color:Colors.White,fontSize:18,fontFamily:'Gibson',textTransform:"capitalize",width:SCREEN_WIDTH*.6,marginBottom:SCREEN_HEIGHT*.005}}>{item.title}</Text>
            <Text style={{color:Colors.White,fontSize:12,fontFamily:'Gibson',textTransform:"capitalize"}}>{item.desc}</Text>
           </View>

        </View>
    )
}
const Benefits=()=>{

    return(
        <View style={{backgroundColor:Colors.Black,padding:SCREEN_WIDTH*.02,height:SCREEN_HEIGHT*.59}}>
<Text style={{color:Colors.White,fontWeight:'500',textTransform:"uppercase",fontFamily:'Gibson',fontSize:18,padding:SCREEN_HEIGHT*.01}}>Benefits</Text>
<FlatList scrollEnabled={false} data={DataConstants.MembershipData} contentContainerStyle={{alignSelf:'center'}} renderItem={(item)=>BenefitRenderItem({item:item.item,index:item.index})}/>
        </View>
    )
}
const Progress=({points})=>{
    const [Percentage, setPercentage] = useState(0)
    useEffect(() => {
        let Calc=FillCalculator({progress:points,maxProgress:2000})
setPercentage(Calc)        
      }, [])
    return(
        <AnimatedCircularProgress
        style={{alignSelf:'center'}}
              size={SCREEN_WIDTH*.46}
              width={7}
              fill={Percentage}
              backgroundColor={Colors.Black}
              rotation={0}
              tintColor={Colors.Green1}>
              {() => (
                <>
               <Image source={king} style={{height:SCREEN_HEIGHT*.1,resizeMode:"contain"}}/>
               <Text style={{color:Colors.Green1,fontSize:20,fontFamily:'Gibson',fontWeight:'500',marginTop:SCREEN_HEIGHT*.01}}>{points}</Text>
               <Text style={{color:Colors.White_Text,fontSize:12,fontFamily:'Gibson',fontWeight:'400'}}>Completed</Text>

               </>
              )}
            </AnimatedCircularProgress>
    )
}
const MembershipDesc = ({type}) => {
    const {points}=DataConstants.UserData
    let memname="VIP-Gold"
    let memdesc=" Conduct more rentals, services and builds to get more exclusive points & Benefits "

  return (
    <SafeAreaView style={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT}}>
<View style={{marginHorizontal:SCREEN_WIDTH*.05}}>
<DrawerHeaderComponent name="VIP-Gold" type={"login"} search={true}/>
<View style={{marginTop:SCREEN_HEIGHT*.02,paddingBottom:SCREEN_HEIGHT*.06}}>
      <Progress points={points}/>
      <View style={{alignItems:'center',marginTop:SCREEN_HEIGHT*.02}}>
      <Text style={{color:Colors.Gold,fontWeight:'600',fontSize:18,marginBottom:SCREEN_HEIGHT*.008}}>{memname}</Text>
        <Text style={{color:Colors.White_Text,fontSize:12,textAlign:'center',fontWeight:'500',maxWidth:SCREEN_WIDTH*.7}}>{memdesc}</Text>
      </View>
</View>
</View>
<Benefits/>
    </SafeAreaView>
  )
}

export default MembershipDesc