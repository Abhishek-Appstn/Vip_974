import {View, Text, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemLayout from '../components/ItemLayout';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import Constants from '../Constants';
import {
  BathroomSize,
  BathroomType,
  CabanSize,
  carpet,
  Condition,
  CornerWardrobe,
  Fiber,
  GalvanisedIron,
  HingeDoor,
  Lifters,
  Nothing,
  OuterCover,
  Paint,
  parquet,
  RoomFloor,
  SlidingDoor,
  tile,
  TowHook,
  WalkinWardrobe,
  Wall,
  Wallpaper,
  Wardrobe,
  WaterTank,
  WindowShutter,
  WindowSize,
} from '../assets/Images';
import {
  AnimatedCircularProgress,
} from 'react-native-circular-progress';
import InputRenderItem from '../components/InputRenderItem';
import {useNavigation} from '@react-navigation/native';

const {SCREEN_HEIGHT, SCREEN_WIDTH} = Constants.SCREEN_DIMENSIONS;
const {Colors} = Constants;
const CustomData = [
  {
    id: 1,
    image: CabanSize,
    header: 'Caban Size',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {inputType: 'TextInput', data: ['height', 'width']},
  },
  {
    id: 2,
    image: BathroomSize,
    header: 'Bathroom Size',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection',
      data: [
        {Dataname: 'Standard', size: '160 x 160 CM²'},
        {Dataname: 'Medium', size: '180 x 180 CM²'},
        {Dataname: 'Large Size', size: '200 x 200 CM²'},
      ],
    },
  },
  {
    id: 3,
    image: RoomFloor,
    header: 'ROom Floor',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection-Image',
      data: [
        {Dataname: 'Paraquet', image: parquet},
        {Dataname: 'Carpets', image: carpet},
        {Dataname: 'Marble Alternative', image: tile},
        {Dataname: 'Nothing', image: Nothing},
      ],
    },
  },
  {
    id: 4,
    image: Wardrobe,
    header: 'Wardrobe',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection-Image',
      data: [
        {Dataname: 'Sliding Door', image: SlidingDoor},
        {Dataname: 'Hinge Door', image: HingeDoor},
        {Dataname: 'Corner Wardrobe', image: CornerWardrobe},
        {Dataname: 'Walk-in-wardrobe', image: WalkinWardrobe},
      ],
    },
  },
  {
    id: 5,
    image: Wall,
    header: 'The Wall',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection-Image',
      data: [
        {Dataname: 'WallPaper', image: Wallpaper},
        {Dataname: 'Paint', image: Paint},
        {Dataname: 'Nothing', image: Nothing},
      ],
    },
  },
  {
    id: 6,
    image: WindowSize,
    header: 'Windows Size',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection',
      data: [
        {Dataname: 'Standard', size: '160 x 160 CM²'},
        {Dataname: 'Medium', size: '180 x 180 CM²'},
        {Dataname: 'Large Size', size: '200 x 200 CM²'},
      ],
    },
  },
  {
    id: 7,
    image: WindowShutter,
    header: 'Windows Shutters',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection-Horizontal',
      data: [
        {Dataname: 'Yes', subData: 'With Shutters'},
        {Dataname: 'No', subData: 'Without Shutters'},
      ],
    },
  },
  {
    id: 8,
    image: Lifters,
    header: 'Lifters',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection-Horizontal',
      data: [
        {Dataname: '(X2) Lifters', subData: 'Only in the front'},
        {Dataname: '(X4) Lifters', subData: 'To all sides'},
      ],
    },
  },
  {
    id: 9,
    image: BathroomType,
    header: 'BathroomType',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection-Horizontal',
      data: [
        {Dataname: 'Standard', subData: 'Classic'},
        {Dataname: 'Custome', subData: 'Select One'},
      ],
    },
  },
  {
    id: 10,
    image: Condition,
    header: 'Condition',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection-Horizontal2',
      data: [
        {Dataname: '(1) Ton'},
        {Dataname: '(1) Ton X 2'},
        {Dataname: '(2) Ton'},
        {Dataname: '(2) Ton X 2'},
        {Dataname: '(2.5) Ton'},
        {Dataname: '(2.5) Ton X 2'},
        {Dataname: 'Without'},
      ],
    },
  },
  {
    id: 11,
    image: OuterCover,
    header: 'Outer Cover',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection-Image',
      data: [
        {Dataname: 'Galvanised Iron', image: GalvanisedIron},
        {Dataname: 'Fiber Door', image: Fiber},
      ],
    },
  },
  {
    id: 12,
    image: WaterTank,
    header: 'Water Tank',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection',
      data: [
        {Dataname: '500 Liter'},
        {Dataname: '1000 Liter'},
        {Dataname: '1500 Liter'},
        {Dataname: '2000 Liter'},
      ],
    },
  },
  {
    id: 13,
    image: TowHook,
    header: 'Tow Hook',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    input: {
      inputType: 'Selection-Horizontal',
      data: [
        {Dataname: 'Yes', subData: 'With Hook'},
        {Dataname: 'No', subData: 'Without Hook'},
      ],
    },
  },
];
const Steplength = CustomData.length;
const handlePress = ({ActiveStep, setActiveStep}) => {
  ActiveStep < Steplength ? setActiveStep(ActiveStep + 1) : Alert.alert('End');
};

const CustomBuild = () => {
  const navigation = useNavigation();
  const [ActiveStep, setActiveStep] = useState(1);
  const [Percentage, setPercentage] = useState(0);
  const [Data, setData] = useState({});
  const handlebackpress = () => {
    ActiveStep<= 1 ?navigation.goBack():setActiveStep(ActiveStep - 1) 
  };
  console.log("ACTIVEEEE",ActiveStep)
  useEffect(() => {
    const CalculatePercentage = () => {
      return ((ActiveStep / Steplength) * 100).toFixed(0);
    };
    let length = CalculatePercentage();
    setPercentage(length);
  }, [ActiveStep]);

  useEffect(() => {
    setData([CustomData[ActiveStep - 1]]);
  }, [ActiveStep]);
  console.log('SSSSSSS', Data);
  const StepContent = () => {
    return (
      <View style={{backgroundColor: Colors.Black_Bg}}>
        <FlatList
          scrollEnabled={false}
          data={Data}
          renderItem={({ item }) => {
            return ActiveStep === Steplength + 1 ? null : <InputRenderItem item={item}/> }}
        />
      </View>
    );
  };
  const PageHeader = ({item}) => {
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
            {item.header}
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
        <PageHeader item={CustomData[ActiveStep - 1]} />
      </View>
      <StepContent />
    </ItemLayout>
  );
};

export default CustomBuild;
