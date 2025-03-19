import {View, Text, FlatList, Alert, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemLayout from '../components/ItemLayout';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import Constants from '../Constants';
import {
  AnimatedCircularProgress,
} from 'react-native-circular-progress';
import InputRenderItem from '../components/InputRenderItem';
import {useNavigation} from '@react-navigation/native';
import CustomBuildData from '../assets/CustomBuildData';
import Snackbar from 'react-native-snackbar';
const CustomData = CustomBuildData()

const {SCREEN_HEIGHT, SCREEN_WIDTH} = Constants.SCREEN_DIMENSIONS;
const {Colors} = Constants;
const PageHeader = ({item,ActiveStep,Percentage}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SCREEN_HEIGHT * 0.02,
      }}>
      <View>
        <Text
          style={{
            color: Colors.White,
            fontSize: 18,
            fontWeight: '500',
            textTransform: 'uppercase',
          }}>
          {item.title}
        </Text>
        <Text style={{color: Colors.Green1, fontSize: 16, fontWeight: '500'}}>
          Step {ActiveStep}/{Steplength}
        </Text>
      </View>
      <AnimatedCircularProgress
        size={60}
        width={5}
        fill={Percentage}
        backgroundColor={Colors.Circle_Border}
        rotation={0}
        tintColor={Colors.Star_Yellow}>
        {() => (
          <Text style={{color: Colors.White, fontWeight: '800'}}>
            {Percentage} %
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};
const StepContent = ({JsonData,setJsonData,Data}) => {
      return (
        Data.key!=='NameOfCustomization'?
          <View style={{alignItems:'center',justifyContent:'center',height:SCREEN_HEIGHT*.7,width:SCREEN_WIDTH,backgroundColor:Colors.Black_Bg}}>
    <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center',marginTop:SCREEN_HEIGHT*.05}}>
      <Image source={Data.image}/>
     <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:24,marginVertical:SCREEN_HEIGHT*.02,textTransform:'uppercase'}}>{Data.title}</Text>
     <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:16,maxWidth:SCREEN_WIDTH*.75,textAlign:'center',marginBottom:SCREEN_HEIGHT*.02}}>{Data.description}</Text>
          <FlatList
            scrollEnabled={false}
            key={Data.id}
            data={Data.flatlistData}
            renderItem={({ item }) => <InputRenderItem Item={item} name={Data.key} JsonData={JsonData} setJsonData={setJsonData} />}
          />
          </ScrollView>
          </View>:
          <View style={{justifyContent:'center',height:SCREEN_HEIGHT*.7,width:SCREEN_WIDTH,backgroundColor:Colors.Black_Bg,paddingHorizontal:SCREEN_WIDTH*.05}}>
          <ScrollView contentContainerStyle={{justifyContent:'center',marginTop:SCREEN_HEIGHT*.05}}>
          <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:24,marginVertical:SCREEN_HEIGHT*.02,textTransform:'uppercase'}}>{Data.title}</Text>
          
          <FlatList
                  scrollEnabled={false}
                  key={Data.id}
                  data={Data.flatlistData}
                  renderItem={({ item }) => <InputRenderItem Item={item} key={Data.key} name={Data.key} JsonData={JsonData} setJsonData={setJsonData} />}
                />
           <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:16,textAlign:'justify',marginBottom:SCREEN_HEIGHT*.02}}>{Data.description}</Text>
        <View style={{backgroundColor:Colors.Black,padding:SCREEN_WIDTH*.02}}>
        <Image source={Data.image} style={{width:SCREEN_WIDTH*.9,height:SCREEN_HEIGHT*.25}} resizeMode= 'contain'/>
<View style={{marginTop:SCREEN_HEIGHT*.02,padding:SCREEN_WIDTH*.02,flexDirection:'row',justifyContent:'space-between'}}>
  <View style={{flexDirection:'row'}}>

  <Image source={Data.icons[0]}/>
  <View style={{marginLeft:SCREEN_WIDTH*.03}}>
  <Text style={{color:Colors.Gray_Text,fontSize:14,fontFamily:'Gibson',fontWeight:'light'}}>{Data.buildingName}</Text>
  <Text style={{color:Colors.Gray_Text,fontSize:14,fontFamily:'Gibson',fontWeight:'light',maxWidth:SCREEN_WIDTH*.5}}>{Data.address}</Text>
  </View>
  </View>
  <Image source={Data.icons[1]} style={{height:SCREEN_HEIGHT*.034,width:SCREEN_WIDTH*.073, resizeMode:'contain' ,borderColor:Colors.Green1,borderWidth:0.5,borderRadius:SCREEN_WIDTH*.02,padding:SCREEN_WIDTH*.016}}/>

</View>
        </View>
          
                </ScrollView>
                </View>
      );
    };

const Steplength = Object.keys(CustomData).length;


const handlePress = ({ ActiveStep, setActiveStep, JsonData, keys,navigation}) => {
  const ActiveKey = keys[ActiveStep - 1]; 
  if (!ActiveKey) {
    console.error("Error: ActiveKey is undefined or invalid.");
    Snackbar.show({
      text: "Error: Unable to resolve the current step's key. Please check the data.",
      backgroundColor:'red',duration: Snackbar.LENGTH_SHORT,
    });
    return;
  }

  const activeData = JsonData[ActiveKey];
  if (!activeData) {
    Snackbar.show({
      text: `No data found for ${ActiveKey}. Please fill in the required fields.`,
      backgroundColor:'red',duration: Snackbar.LENGTH_SHORT,
    });
    return;
  }
  const isDataValid = !Object.values(activeData).some(
    value => value === null || value === undefined || value === ''
  );
  if (!isDataValid) {
    Snackbar.show({
      text: `Enter the required fields for ${ActiveKey} to continue.`,
      backgroundColor:'red',duration: Snackbar.LENGTH_SHORT,
    });
    return;
  }
  if (ActiveStep < Steplength) {
    setActiveStep(ActiveStep + 1);
  } else {
    Alert.alert(
      'Confirmation', 
      'Are you sure you want to proceed?', 
      [
        {
          text: 'Yes',
          onPress: () => {console.log('Yes Pressed'),navigation.navigate('Home')}
        },
        { 
          text: 'No', 
          onPress: () => console.log('NO Pressed') 
        },
      ],
    )}
  }
const CustomBuild = () => {
  const navigation = useNavigation();
  const [ActiveStep, setActiveStep] = useState(1);
 const keys=Object.keys(CustomData)
  const [Percentage, setPercentage] = useState(0);
  const [Data, setData] = useState({});
  const handlebackpress = () => {
    ActiveStep<= 1 ?navigation.goBack():setActiveStep(ActiveStep - 1) 
  };

  useEffect(() => {
    const CalculatePercentage = () => {
      return ((ActiveStep / Steplength) * 100).toFixed(0);
    };
    let length = CalculatePercentage();
    setPercentage(length);
  }, [ActiveStep]);

useEffect(() => {
  setData(CustomData[keys[ActiveStep-1]])
}, [ActiveStep])
console.log("KEEEEYS",keys)
const [JsonData, setJsonData] = useState({});

  return (
    <ItemLayout
      name={ActiveStep===Steplength?"Submit":'Next'}
      onPress={() =>
        handlePress({ActiveStep: ActiveStep, setActiveStep: setActiveStep,JsonData:JsonData,keys:keys,Steplength,navigation:navigation})
      }>
      <View style={{marginHorizontal: SCREEN_WIDTH * 0.04}}>
        <DrawerHeaderComponent
          back={handlebackpress}
          active={ActiveStep}
          setactive={setActiveStep}
          name={'Custom'}
          type={'login'}
          search={true}
        />
      <PageHeader item={Data} ActiveStep={ActiveStep} Percentage={Percentage} />
      </View>
      <StepContent JsonData={JsonData} setJsonData={setJsonData} Data={Data}/>
    </ItemLayout>
  );
};

export default CustomBuild;
