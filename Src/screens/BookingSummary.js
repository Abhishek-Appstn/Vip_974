import { View, Text, Image, SafeAreaView, Pressable, FlatList, Modal, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from '../Constants';
import { ChevronLeft, ChevronRight, CrossMark, Plus, Tick } from '../assets/Images';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import ActionSheet from 'react-native-actions-sheet';
import CustomButton from '../components/CustomButton/CustomButton';
import DataConstants from '../assets/DataConstants';
import { useDispatch, useSelector } from 'react-redux';
import Utils from '../Utils';
import LocationComponent from '../components/LocationComponent';
import CartIncrementButtons from '../components/CartIncrementButtons';
import TimeSlot from '../components/TimeSlot';
import MapViewComponent from '../components/MapViewComponent';
import IconComponent from '../components/IconComponent';
import { LowerButtonComponent } from '../components/ItemLayout';
const { Colors } = Constants;
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS;
const { ServicePay, Services, paymentData, softDrinks } = DataConstants

const FlatListRenderItem = ({ item, index, SelectedAddon, setSelectedAddon, Choosen }) => {
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomTextAlign = Utils.textAlign(language)

  return (
    <Pressable style={[{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, CustomFlexDirection]}>
      <View style={[{ flexDirection: 'row', alignItems: 'center' }, CustomFlexDirection]}>
        <Image source={item.image} style={{ height: SCREEN_WIDTH * .15, width: SCREEN_WIDTH * .15, borderRadius: SCREEN_WIDTH * .04 / 4, borderColor: Colors.White_Text, borderWidth: 2 }} />
        <View style={[{ marginHorizontal: SCREEN_WIDTH * .02, }]}>
          <Text style={[{ color: Colors.White, fontFamily: 'Gibson', fontSize: 16, textTransform: 'uppercase', maxWidth: SCREEN_WIDTH * .45 }, CustomTextAlign]}>{item.name}</Text>
          <Text style={[{ color: Colors.Green1, fontFamily: 'Gibson', fontSize: 16 }, CustomTextAlign]}>{item.price} QAR</Text>
        </View>
      </View>
      <CartIncrementButtons item={item} setSelectedAddon={setSelectedAddon} SelectedAddon={SelectedAddon} Choosen={Choosen} />
    </Pressable>
  )
}

const ActionsheetComponent = ({ ActionsheetRef, Choosen, CustomFlexDirection, SelectedAddon, setSelectedAddon }) => {

  return (
    <ActionSheet closable={true} containerStyle={{ backgroundColor: Colors.Black_Bg, height: SCREEN_HEIGHT * .9 }} ref={ActionsheetRef}>
      <View style={{ marginTop: 10, marginHorizontal: SCREEN_WIDTH * .07, }}>
        <View
          style={{
            width: 40,
            height: 5,
            backgroundColor: '#ccc',
            borderRadius: 2.5,
            alignSelf: 'center',
            marginVertical: 10,
          }}
        />
        <Pressable style={{ position: 'absolute', right: 5, top: 3 }} onPress={() => ActionsheetRef.current?.hide()}>
          <Image source={CrossMark} />

        </Pressable>

        <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, CustomFlexDirection]}>
          <Text style={{ textTransform: 'uppercase', color: Colors.White, fontFamily: 'Gibson', fontSize: 18, fontWeight: '400' }}>{Choosen == 'Drinks Box' ? 'Drinks Box' : 'Home Businesses'}</Text>
          <Text style={{ color: Colors.Green1, fontFamily: 'Gibson', fontSize: 12 }}>(3) Items</Text>
        </View>

        <FlatList contentContainerStyle={{ marginTop: 10, paddingBottom: SCREEN_HEIGHT * .02 }} data={Choosen == 'Drinks Box' ? softDrinks : Services} renderItem={item => <FlatListRenderItem item={item.item} index={item.index} setSelectedAddon={setSelectedAddon} SelectedAddon={SelectedAddon} Choosen={Choosen} />} />
      </View>

    </ActionSheet>
  )
}
const ModalComponent = ({ Visible, setVisible, navigation }) => {
  return (
    <Modal visible={Visible} >
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ height: SCREEN_WIDTH * .9, backgroundColor: Colors.Black, width: SCREEN_WIDTH * .8, borderRadius: 15, alignItems: 'center', paddingTop: SCREEN_WIDTH * .078 }}>
          <View style={{ height: SCREEN_WIDTH * .2, width: SCREEN_WIDTH * .2, backgroundColor: Colors.Green1, alignItems: 'center', justifyContent: 'center', padding: SCREEN_HEIGHT * .01, borderRadius: SCREEN_WIDTH }}>
            <Image source={Tick} style={{ resizeMode: 'contain' }} />
          </View>
          <Text style={{ fontFamily: 'Gibson', fontWeight: 'semibold', fontSize: 18, marginHorizontal: SCREEN_WIDTH * .045, textTransform: 'uppercase', color: Colors.White, marginTop: SCREEN_WIDTH * .08 }}>Rental Done Successfully</Text>
          <Text style={{ fontFamily: 'Gibson', fontWeight: 'light', fontSize: 14, alignSelf: 'center', width: SCREEN_WIDTH * .6, color: Colors.White, textAlign: 'center', marginVertical: SCREEN_WIDTH * .04 }}>Thank you. The lease has been successful. You can follow the order from the My Rentals  page</Text>
          <CustomButton width={SCREEN_WIDTH * .55} title="My Rentals" onPress={() => { setVisible(false), navigation.navigate("MyActivities") }} />
        </View>
      </View>
    </Modal>
  )
}

const MiddleComponent = ({ params, ActionsheetRef, setChoosen, SelectedAddon, CustomFlexDirection, CustomAlignItems }) => {
  return (
    <View style={{ paddingHorizontal: SCREEN_WIDTH * .04, justifyContent: 'center' }}>{
      params.type == 'services' ? <MapViewComponent data={params} header={"Enter Location"} style={{ paddingVertical: 0 }} /> :
        <FlatList data={params.addOn} contentContainerStyle={{ marginHorizontal: SCREEN_WIDTH * 0.07, paddingVertical: params.type === 'rent' ? 0 : SCREEN_WIDTH * .025, }} scrollEnabled={false} renderItem={({ item, index }) => {
          return (
            <Pressable style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: SCREEN_WIDTH * .05, }, CustomFlexDirection]} onPress={() => { setChoosen(item.name), ActionsheetRef.current?.show() }}>
              <View style={[CustomAlignItems]}>
                <Text
                  style={{
                    color: Colors.White,
                    fontSize: 18,
                    fontFamily: 'Gibson',
                    textTransform: 'uppercase',
                    marginVertical: SCREEN_WIDTH * 0.01,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: Colors.Green1,
                    fontSize: 12,
                    fontFamily: 'Gibson',
                    fontWeight: '450',
                    marginTop: SCREEN_WIDTH * 0.01,
                  }}
                >
                  {SelectedAddon && SelectedAddon[item.name]
                    ? Object.keys(SelectedAddon[item.name]).length > 0
                      ? `(${Object.keys(SelectedAddon[item.name]).length}) Items Selected`
                      : 'No Items Selected'
                    : 'No Items Selected'}
                </Text>

              </View>
              <IconComponent image={Plus} onPress={() => { setChoosen(item.name), ActionsheetRef.current?.show() }} />
            </Pressable>
          )
        }} />
    }</View>

  )
}

const PaymentComponent = ({ params }) => {
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomAlignSelf = Utils.alignSelf(language)
  return (
    <View
      style={{
        paddingHorizontal: SCREEN_WIDTH * .07, paddingVertical: SCREEN_HEIGHT * .02, borderRadius: 20
      }}>
      <Text
        style={[{
          color: Colors.White,
          fontSize: 18,
          fontFamily: 'Gibson',
          textTransform: 'uppercase',
          fontWeight: '400',
        }, CustomAlignSelf]}>Payments</Text>

      <FlatList scrollEnabled={false} data={params.type == 'services' ? ServicePay : paymentData} renderItem={({ item, index }) => {
        return (
          <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: SCREEN_HEIGHT * .005 }, CustomFlexDirection]}>
            <Text
              style={{
                color: Colors.White,
                fontSize: 16,
                fontFamily: 'Gibson',
                fontWeight: '400',
                marginVertical: SCREEN_WIDTH * 0.01,
              }}>{item.name}</Text>

            <Text
              style={{
                color: Colors.White,
                fontSize: 16,
                fontFamily: 'Gibson',
                textTransform: 'uppercase',
                textAlign: 'right',
                marginVertical: SCREEN_WIDTH * 0.01,
              }}>{item.amt} QAR</Text>

          </View>
        )
      }} />
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: SCREEN_WIDTH * .014 }, CustomFlexDirection]}>

        <Text
          style={{
            color: Colors.White,
            fontSize: 18,
            fontFamily: 'Gibson',
            fontWeight: 'bold',
            marginVertical: SCREEN_WIDTH * 0.01,
          }}>Total</Text>

        <Text style={{ fontSize: 31, fontWeight: 'bold', color: Colors.White }}>250<Text style={{ fontSize: 12, fontWeight: 'bold', color: Colors.White }}>/ QAR</Text></Text>

      </View>
    </View>
  )
}

const HeaderComponent = ({ params }) => {
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomTextAlign = Utils.textAlign(language)
  return (
    <View
      style={{
        marginHorizontal: SCREEN_WIDTH * 0.07,
        marginTop: SCREEN_HEIGHT * 0.01,
        backgroundColor: Colors.Black_Bg,
      }}>
      <View
        style={[{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }, CustomFlexDirection]}>
        <View style={[{ flexDirection: 'row', alignItems: 'center' }, CustomFlexDirection]}>
          {params.type !== 'services' ? <Image
            source={params.images[0]}
            style={{
              height: SCREEN_WIDTH * 0.14,
              width: SCREEN_WIDTH * 0.14,
              resizeMode: 'cover',
              borderRadius: (SCREEN_WIDTH * 0.1) / 5,
            }}
          /> :
            <View style={{ padding: SCREEN_WIDTH * .02, borderColor: Colors.Gray_Border, borderWidth: 1, borderRadius: SCREEN_WIDTH }}>
              <Image
                source={params.image}
                style={{
                  height: SCREEN_WIDTH * 0.1,
                  width: SCREEN_WIDTH * 0.1,
                  resizeMode: 'contain',
                  borderRadius: SCREEN_WIDTH * 0.1
                }}
              />
            </View>}

          <View style={{ marginHorizontal: SCREEN_WIDTH * 0.03 }}>
            <Text
              style={[{
                color: Colors.White,
                fontSize: 18,
                fontFamily: 'Gibson',
                textTransform: 'uppercase',
                marginVertical: SCREEN_WIDTH * 0.01,
              }, CustomTextAlign]}>
              {params.name}
            </Text>
            <Text
              style={[{
                color: Colors.Orange1,
                fontSize: 12,
                fontFamily: 'Gibson',
                textTransform: 'capitalize',
              }, CustomTextAlign]}>
              {params.type == 'services' ? `${params.size}  M² CABANA` : params.brand}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: Colors.Green1,
              fontSize: 24,
              fontFamily: 'Gibson',
              fontWeight: '600',
              textAlign: 'right',
            }}>
            {params.type == 'services' ? params.total : params.price}
          </Text>
          <Text
            style={{
              color: Colors.Green1,
              fontSize: 12,
              fontFamily: 'Gibson',
              fontWeight: '600',
            }}>
            QAR/hour
          </Text>
        </View>
      </View>
      {params.type !== 'services' ? <View style={{ marginTop: SCREEN_HEIGHT * 0.03, }}>
        <LocationComponent address={params.location} header={'Pick up Location'} width={SCREEN_WIDTH * .85} />
      </View> : null}
      <TimeSlot params={params} header={'Timeslot'} selectedDate={params.selectedDate} selectedTime={params.selectedTime} style={{}} />
    </View>
  );
};
const BookingSummary = (props) => {
  const [Choosen, setChoosen] = useState('')
  const [Visible, setVisible] = useState(false)
  const [SelectedAddon, setSelectedAddon] = useState({})

  const navigation = useNavigation()
  const params = props.route.params;
  const ActionsheetRef = useRef()
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomAlignItems = Utils.alignItems(language)
  const CustomTextAlign = Utils.textAlign(language)
  return (
    <>
      <View style={{ flex: 1, backgroundColor: Colors.Green1, }}>
        <View style={{ backgroundColor: Colors.Black_Bg, borderRadius: 15, borderTopRightRadius: 0, borderTopLeftRadius: 0, height: SCREEN_HEIGHT * .9, overflow: 'hidden' }}>
          <SafeAreaView>
            <DrawerHeaderComponent name={params.type == 'services' ? "Summary" : "Rent"} search={true} type='login' />
          </SafeAreaView>
          <ScrollView contentContainerStyle={{}} bounces={false}>
            <View style={{ height: null, paddingBottom: SCREEN_HEIGHT * .02, width: SCREEN_WIDTH, }}>
              <HeaderComponent params={params} />
            </View>
            <View style={{ backgroundColor: Colors.Black, paddingTop: SCREEN_WIDTH * .04 }}>
              <MiddleComponent SelectedAddon={SelectedAddon} params={params} ActionsheetRef={ActionsheetRef} setChoosen={setChoosen} CustomFlexDirection={CustomFlexDirection} CustomAlignItems={CustomAlignItems} />
            </View>
            <PaymentComponent params={params} />
          </ScrollView>
        </View>
        <LowerButtonComponent buttonTitle={'Proceed to Payment'} onPress={() => { setVisible(true) }} />
      </View>
      <ActionsheetComponent Choosen={Choosen} SelectedAddon={SelectedAddon} setSelectedAddon={setSelectedAddon} CustomFlexDirection={CustomFlexDirection} ActionsheetRef={ActionsheetRef} CustomTextAlign={CustomTextAlign} CustomAlignItems={CustomAlignItems} />

      <ModalComponent Visible={Visible} navigation={navigation} setVisible={setVisible} />

    </>

  );
};

export default BookingSummary;
