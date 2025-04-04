import { View, SafeAreaView, ScrollView, Pressable, Text, Image, Platform } from 'react-native';
import React, { useRef } from 'react';
import Constants from '../Constants';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import ServiceHeader from '../components/ServiceHeader';
import LocationComponent from '../components/LocationComponent';
import TimeSlot from '../components/TimeSlot';
import { calendar, calendar_White, CrossMark } from '../assets/Images';
import AddonComponent from '../components/AddonComponent';
import PaymentComponent from '../components/PaymentComponent';
import ButtonComponent from '../components/ButtonComponent';
import MapViewComponent from '../components/MapViewComponent';
import ActionSheet from 'react-native-actions-sheet';
import QRCode from 'react-native-qrcode-svg';
import ItemLayout from '../components/ItemLayout';
const { Colors } = Constants;
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS;

const ActionsheetComponent = ({ params, ActionsheetRef }) => {
  return (
    <ActionSheet closable={true} containerStyle={{ backgroundColor: Colors.Black_Bg, flex: .95 }} ref={ActionsheetRef}>

      <View style={{ position: 'absolute', paddingTop: SCREEN_HEIGHT * .02, marginHorizontal: SCREEN_WIDTH * .07, flexDirection: 'row', justifyContent: 'space-evenly', width: SCREEN_WIDTH * .95 }}>

        <View style={{}}>
          <View
            style={{
              width: SCREEN_WIDTH * .5,
              height: SCREEN_HEIGHT * .005,
              backgroundColor: '#ccc',
              borderRadius: SCREEN_HEIGHT * .005 / 2,
              alignSelf: 'center',
              marginVertical: SCREEN_HEIGHT * .005,
            }}
          />
        </View>

        <Pressable style={{}} onPress={() => ActionsheetRef.current?.hide()}>
          <Image source={CrossMark} />
        </Pressable>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: SCREEN_HEIGHT * .9 }}>
        <Text style={{ fontFamily: 'Gibson', fontSize: 23, color: Colors.White, marginVertical: SCREEN_WIDTH * .06, textTransform: 'uppercase', alignSelf: 'center' }}>{params.type == 'services' ? params.subtype == 'towing' ? 'Towing' : "Cleaning" : 'Beach'}</Text>
        <Text style={{ fontFamily: 'Gibson', fontSize: 23, color: Colors.White, marginBottom: SCREEN_WIDTH * .06, alignSelf: 'center' }}>{params.type == 'services' ? `${params.size} M² CABANA` : params.name}</Text>

        <View style={{ padding: SCREEN_WIDTH * .035, borderColor: Colors.White, borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
          <QRCode
            value={JSON.stringify(params.name, params.brand, params.location, params.date)}
            backgroundColor={Colors.Black_Bg} size={200}
            color={Colors.White}
          />
        </View>
        <Text style={{ fontFamily: 'Gibson', fontSize: 16, color: Colors.White_Text, marginVertical: SCREEN_WIDTH * .06, alignSelf: 'center', width: SCREEN_WIDTH * .55, textAlign: 'center' }}>Please take a screenshot to Scan this QR Code </Text>

      </View>
    </ActionSheet>
  )
}
const BookedTicket = (props) => {
  const ActionsheetRef = useRef()
  const params = props.route.params;
  console.log('Params', params);

  return (
    <ItemLayout colors={Colors.Black_Bg} type="barcode" buttonTitle={'SCan Barcode'} onPress={() => { ActionsheetRef.current.show() }}>

      <DrawerHeaderComponent
        type="login"
        search={true}
        name="Booked Ticket"
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: SCREEN_HEIGHT * 0.1 }}
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          zIndex: 10,
          overflow: 'visible',
        }}
      >
        <View
          style={{
            marginHorizontal: SCREEN_WIDTH * 0.05,
            overflow: 'visible',
            paddingBottom: SCREEN_HEIGHT * 0.02,
          }}
        >

          <ServiceHeader
            style={{
              marginTop: SCREEN_HEIGHT * 0.04,
              paddingBottom: SCREEN_HEIGHT * 0.02,
            }}
            data={params}
          />
          {params.type === 'rent' ? (
            <LocationComponent
              width={SCREEN_WIDTH * 0.85}
              header="Pickup Location"
              address={params.location}
            />
          ) : null}
          <TimeSlot
            style={{ marginTop: SCREEN_HEIGHT * 0.03 }}
            header="Time Slot"
            icon={params.type == 'rent' ? calendar_White : calendar}
            selectedDate={params.date}
            selectedTime={params.time}
            params={params}
          />
          {params.type === 'rent' ? (
            <AddonComponent AddonData={params?.addOn} />
          ) : null}
        </View>
        {params.type === 'services' ? (
          <MapViewComponent header="Enter Location" data={params} />
        ) : null}
        <PaymentComponent data={params} />
      </ScrollView>
      <ActionsheetComponent params={params} ActionsheetRef={ActionsheetRef} />
      {/* <ButtonComponent title="Scan Barcode" Onpress={() => { console.log("pressed"), ActionsheetRef?.current?.show() }} /> */}
    </ItemLayout >


  );
};

export default BookedTicket;
