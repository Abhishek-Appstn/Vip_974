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
const CustomData = CustomBuildData()

const {SCREEN_HEIGHT, SCREEN_WIDTH} = Constants.SCREEN_DIMENSIONS;
const {Colors} = Constants;
const PageHeader = ({item,ActiveStep,Percentage}) => {
  console.log("Item@Pheader is",item)
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
  console.log("FOrm",JsonData)
      return (
          <View style={{alignItems:'center',justifyContent:'center',height:SCREEN_HEIGHT*.7,width:SCREEN_WIDTH,backgroundColor:Colors.Black_Bg}}>
    <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center',marginTop:SCREEN_HEIGHT*.05}}>
      <Image source={Data.image}/>
     <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:24,marginVertical:SCREEN_HEIGHT*.02,textTransform:'uppercase'}}>{Data.title}</Text>
     <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:16,maxWidth:SCREEN_WIDTH*.75,textAlign:'center',marginBottom:SCREEN_HEIGHT*.02}}>{Data.description}</Text>
          <FlatList
            scrollEnabled={false}
            key={Data.id}
            data={Data.flatlistData}
            renderItem={({ item }) => <InputRenderItem Item={item} name={Data.title} JsonData={JsonData} setJsonData={setJsonData} />}
          />
          </ScrollView>
          </View>
      );
    };

const Steplength = Object.keys(CustomData).length;
const handlePress = ({ActiveStep, setActiveStep}) => {
  ActiveStep < Steplength ? setActiveStep(ActiveStep + 1) : Alert.alert('End');
};
console.log('DAAAATA',Steplength)
const CustomBuild = () => {
  const navigation = useNavigation();
  const [ActiveStep, setActiveStep] = useState(1);
 const keys=Object.keys(CustomData)
  const [Percentage, setPercentage] = useState(0);
  const [Data, setData] = useState({});
  const handlebackpress = () => {
    ActiveStep<= 1 ?navigation.goBack():setActiveStep(ActiveStep - 1) 
  };
  console.log("ACTIVEEEE",Data,ActiveStep)
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

 


console.log("Steplength",Steplength)
const [JsonData, setJsonData] = useState({});

  return (
    <ItemLayout
      name={'Next'}
      onPress={() =>
        handlePress({ActiveStep: ActiveStep, setActiveStep: setActiveStep})
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
