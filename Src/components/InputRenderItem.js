import { View, Text, Image, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from '../Constants';
import CustomTextInput from './CustomTextInput/CustomTextInput';

const { Colors } = Constants;
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS;

const InputRenderItem = ({ Item, name,JsonData,setJsonData }) => {

  
    const HandlePress = (item) => {
        setJsonData((prevFormData) => ({
            ...prevFormData, 
            [name]: {
                ...(prevFormData[name]), 
                ...item, 
            },
        }));
    };
    
    return (
        <FlatList
        numColumns={Item.inputType=='Selection-Horizontal'||Item.inputType=='Selection-Horizontal2'?2:null}
            data={Item.data}
            renderItem={({ item, index }) => {
                switch (Item.inputType) {
                    case 'TextInput':
                        return (
                            <View style={{ marginVertical: SCREEN_HEIGHT * 0.02 }}>
                                <CustomTextInput
                                    name={item}
                                    onChangeText={(text) =>
                                        setJsonData((prevFormData) => ({
                                            ...prevFormData,
                                            [name]: {
                                                ...prevFormData[name],
                                                [item]: text,
                                            },
                                        }))
                                    }
                                />
                            </View>
                        );
                    case 'Selection':
                        return (
                            <Pressable
                                style={{
                                    marginVertical: SCREEN_HEIGHT * 0.012,
                                    width: SCREEN_WIDTH * 0.9,
                                    backgroundColor: Colors.Black,
                                    height: SCREEN_HEIGHT * 0.07,
                                    padding: SCREEN_WIDTH * 0.03,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }} onPress={()=>HandlePress(item)}
                            >
                                <View>
                                    <Text style={{ fontFamily: 'Gibson', color: Colors.White, fontSize: 18 }}>
                                        {item.Dataname}
                                    </Text>
                                    {item?.size && (
                                        <Text style={{ fontFamily: 'Gibson', color: Colors.Green1, fontSize: 14 }}>
                                            {item.size}
                                        </Text>
                                    )}
                                </View>
                                <View style={{height:SCREEN_WIDTH*.07,width:SCREEN_WIDTH*.07,borderRadius:SCREEN_HEIGHT,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
                    <View style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05,borderRadius:SCREEN_HEIGHT,backgroundColor:JSON.stringify(JsonData[name])===JSON.stringify(item)?Colors.Green1:null}}/>
                        </View>
                            </Pressable>
                        );


                        case 'Selection-Image':
                        console.log("edaaa",JsonData)
                return(
                    <Pressable style={{marginVertical:SCREEN_HEIGHT*.012,width:SCREEN_WIDTH*.9,backgroundColor:Colors.Black,height:SCREEN_HEIGHT*.07,padding:SCREEN_WIDTH*.03,flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}onPress={()=>HandlePress(item)}>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={item.image} style={{width:SCREEN_WIDTH*.07,resizeMode:"contain"}}/>
                  <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,textTransform:"uppercase",marginLeft:SCREEN_WIDTH*.04}}>{item.Dataname}</Text>
                  </View>
                    <View style={{height:SCREEN_WIDTH*.07,width:SCREEN_WIDTH*.07,borderRadius:SCREEN_HEIGHT,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
                    <View style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05,borderRadius:SCREEN_HEIGHT,backgroundColor:JSON.stringify(JsonData[name])===JSON.stringify(item)?Colors.Green1:null}}/>
                        </View>
                    </Pressable>
            )
            case 'Selection-Horizontal':
               
                return(
                    <Pressable style={{marginHorizontal:SCREEN_HEIGHT*.012,width:SCREEN_WIDTH*.43,backgroundColor:Colors.Black,height:SCREEN_HEIGHT*.17,padding:SCREEN_WIDTH*.03,paddingTop:SCREEN_HEIGHT*.02,borderRadius:10,overflow:'hidden',marginTop:SCREEN_HEIGHT*.05}}onPress={()=>HandlePress(item)}>
               <View style={{height:SCREEN_WIDTH*.07,width:SCREEN_WIDTH*.07,borderRadius:SCREEN_HEIGHT,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
                    <View style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05,borderRadius:SCREEN_HEIGHT,backgroundColor:JSON.stringify(JsonData[name])===JSON.stringify(item)?Colors.Green1:null}}/>
                        </View>
                        <View style={{marginVertical:SCREEN_HEIGHT*.034}}>

                  <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,textTransform:"uppercase",marginVertical:SCREEN_WIDTH*.01}}>{item.Dataname}</Text>
                  <Text style={{fontFamily:'Gibson',color:Colors.Green1,fontSize:14,textTransform:"uppercase",marginVertical:SCREEN_WIDTH*.01}}>{item.subData}</Text>
                  </View>

                   
                    </Pressable>
            )
            case 'Selection-Horizontal2':
               
                return(
                    <Pressable style={{margin:SCREEN_HEIGHT*.012,width:SCREEN_WIDTH*.43,backgroundColor:JSON.stringify(JsonData[name])===JSON.stringify(item)?Colors.Green1:Colors.Black,height:SCREEN_HEIGHT*.08,padding:SCREEN_WIDTH*.03,paddingTop:SCREEN_HEIGHT*.02,borderRadius:5,overflow:'hidden',alignItems:'center',justifyContent:'center'}}onPress={()=>HandlePress(item)}>
                  <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:18,textTransform:"uppercase",marginVertical:SCREEN_WIDTH*.01}}>{item.Dataname}</Text>
                    </Pressable>
                )












                    default:
                        return <Text style={{ color: Colors.Razzmatazz }}>Undefined</Text>;
                }
            }}
        />
    );
};

export default InputRenderItem;
