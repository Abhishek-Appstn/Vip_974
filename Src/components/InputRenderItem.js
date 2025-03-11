import { View, Text, Image, TextInput, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Constants from '../Constants'
import CustomTextInput from './CustomTextInput/CustomTextInput'


const InputRenderItem = ({item}) => {
    const {Colors}=Constants
    const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const [formData, setformData] = useState([])
    console.log("Yo");
    console.log(item.input.inputType)
    const LowerField=()=>{
        switch (item.input.inputType) {
            case 'TextInput':
                return(
             <FlatList data={item.input.data} renderItem={({item,index})=>{
                return(
                    <View style={{marginVertical:SCREEN_HEIGHT*.02}}>
                    <CustomTextInput name={item}/>
                    </View>
                )
             }}/>
            )
            case 'Selection':
                return(
             <FlatList data={item.input.data} renderItem={({item,index})=>{
                return(
                    <Pressable style={{marginVertical:SCREEN_HEIGHT*.012,width:SCREEN_WIDTH*.9,backgroundColor:Colors.Black,height:SCREEN_HEIGHT*.07,padding:SCREEN_WIDTH*.03,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View>
                  <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,textTransform:"uppercase"}}>{item.Dataname}</Text>
            {item?.size?   <Text style={{fontFamily:'Gibson',color:Colors.Green1,fontSize:14,marginVertical:SCREEN_HEIGHT*.008}}>{item.size}</Text>:null}
                </View>
                    <View style={{height:SCREEN_WIDTH*.07,width:SCREEN_WIDTH*.07,borderRadius:SCREEN_HEIGHT,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
                        </View>
                    </Pressable>
                )
             }}/>
            )

            case 'Selection-Image':
                return(
             <FlatList data={item.input.data} renderItem={({item,index})=>{
                return(
                    <Pressable style={{marginVertical:SCREEN_HEIGHT*.012,width:SCREEN_WIDTH*.9,backgroundColor:Colors.Black,height:SCREEN_HEIGHT*.07,padding:SCREEN_WIDTH*.03,flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={item.image} style={{width:SCREEN_WIDTH*.07,resizeMode:"contain"}}/>
                  <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,textTransform:"uppercase",marginLeft:SCREEN_WIDTH*.04}}>{item.Dataname}</Text>
                  </View>
                    <View style={{height:SCREEN_WIDTH*.07,width:SCREEN_WIDTH*.07,borderRadius:SCREEN_HEIGHT,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
                    <View style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05,borderRadius:SCREEN_HEIGHT}}/>
                        </View>
                    </Pressable>
                )
             }}/>
            )
            case 'Selection-Horizontal':
                return(
             <FlatList numColumns={2} data={item.input.data} renderItem={({item,index})=>{
                return(
                    <Pressable style={{marginHorizontal:SCREEN_HEIGHT*.012,width:SCREEN_WIDTH*.43,backgroundColor:Colors.Black,height:SCREEN_HEIGHT*.17,padding:SCREEN_WIDTH*.03,paddingTop:SCREEN_HEIGHT*.02,borderRadius:10,overflow:'hidden',marginTop:SCREEN_HEIGHT*.05}}>
                <View style={{height:SCREEN_WIDTH*.07,width:SCREEN_WIDTH*.07,borderRadius:SCREEN_HEIGHT,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
                    <View style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05,borderRadius:SCREEN_HEIGHT,}}/>
                        </View>
                        <View style={{marginVertical:SCREEN_HEIGHT*.034}}>

                  <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,textTransform:"uppercase",marginVertical:SCREEN_WIDTH*.01}}>{item.Dataname}</Text>
                  <Text style={{fontFamily:'Gibson',color:Colors.Green1,fontSize:14,textTransform:"uppercase",marginVertical:SCREEN_WIDTH*.01}}>{item.subData}</Text>
                  </View>

                   
                    </Pressable>
                )
             }}/>
            )
            case 'Selection-Horizontal2':
                return(
             <FlatList numColumns={2} data={item.input.data} renderItem={({item,index})=>{
                return(
                    <Pressable style={{margin:SCREEN_HEIGHT*.012,width:SCREEN_WIDTH*.43,backgroundColor:Colors.Black,height:SCREEN_HEIGHT*.08,padding:SCREEN_WIDTH*.03,paddingTop:SCREEN_HEIGHT*.02,borderRadius:5,overflow:'hidden',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,textTransform:"uppercase",marginVertical:SCREEN_WIDTH*.01}}>{item.Dataname}</Text>
                    </Pressable>
                )
             }}/>)

            default:
                return(<Text style={{color:Colors.Razzmatazz}}>uwencun</Text>)
                break;
        }
    }

  return (
    <View style={{alignItems:'center',justifyContent:'center',height:SCREEN_HEIGHT*.68,width:SCREEN_WIDTH}}>
    <Image source={item?.image}/>
   <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:24,marginVertical:SCREEN_HEIGHT*.02,textTransform:'uppercase',maxWidth:SCREEN_WIDTH*.66}}>{item.header}</Text>
   <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:16,maxWidth:SCREEN_WIDTH*.75,textAlign:'center',marginBottom:SCREEN_HEIGHT*.02}}>{item.description}</Text>
   <LowerField/>
    </View>
  )
}

export default InputRenderItem