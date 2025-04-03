import {
  Build_Icon,
  CabanaCustom,
  CabanaStandard,
  Coin_Stacks,
  DesertBike,
  Dew,
  Fanta,
  Gopro,
  Jetski,
  LifeJacket,
  OfferPercentage,
  Pepsi,
  QuadBike,
  Rent_Icon,
  Service_Icon,
  ShowerHead,
  Support,
  Towing,
  YamahaJetski1,
  BathroomSide,
  CoffeeCabana,
  Condition,
  Family_Cabana,
  Kitchen,
  Rooms,
  XlCabana,
  Home,
  Profile,
  AboutUS,
  PrivacyPolicy,
  Logout,
  Profile_Damu,
  Clipboard,
  Gift0,
  email,
  PickupDot,
  LocationPin_green,
  Rent_White,
  Towing_White,
  Build_White,
  Yamahawave1,
  Yamahawave2,
  DesertBike2,
  DesertBike3,
} from './Images';

const CompanyName = 'Vip_974';
const LanguagetoCheck = ['Arabic', 'israeli'];
const UserData = {
  firstname: 'Steve',
  lastname: 'Carpenter',
  membershipType: 'Gold',
  points: 1030,
  profileImage: Profile_Damu,
  mobileNumber: '+9742217718',
  email: 'Carpenter.Steve@yoohoo.com',
  qid: '100CBA20241001',
};
const MembershipData = [
  {
    image: OfferPercentage,
    title: 'Gold Excelusive offers',
    desc: 'Enjoy great rewards and deals',
  },
  {
    image: Coin_Stacks,
    title: 'Get %50  more points',
    desc: 'Earn more points on orders',
  },
  {
    image: Support,
    title: 'priority support',
    desc: 'receive assistance in a flash',
  },
];
const RentData = [
  { name: 'Beach', image: Jetski },
  { name: 'Desert', image: QuadBike },
];

const ServicesData = [
  { name: 'Washing', image: ShowerHead },
  { name: 'Towing', image: Towing },
];

const BuildData = [
  { name: 'Standard', image: CabanaStandard },
  { name: 'Custom', image: CabanaCustom },
];
const HomeData = [
  {
    header: 'Rent',
    Description: 'the best water and desert bikes',
    icon: Rent_Icon,
    params: 'rent',
  },
  {
    header: 'Services',
    Description: 'towing and cleaning service for containers',
    icon: Service_Icon,
    params: 'services',
  },
  {
    header: 'Build',
    Description: 'Easily create your own Cabana',
    icon: Build_Icon,
    params: 'build',
  },
];
const HomeHeader = 'Welcome to Vip-974';
const SignupFields = [
  { name: 'First Name', key: 'FirstName' },
  { name: 'Last Name', key: 'LastName' },
  { name: 'Email', key: 'Email' },
  { name: 'Phone', key: 'Phone' },
  { name: 'Qid', key: 'Qid' },
];
const ServiceSelectionData = ({ type }) => {
  switch (type) {
    case 'rent':
      return 'Please specify the type of vehicles you want, desert or beach';

    case 'services':
      return 'Please choose the type of service you want';

    case 'build':
      return 'Please choose the build type, Standerd or Custom';
  }
};
const ServiceSelectionHeaders = ({ type }) => {
  switch (type) {
    case 'rent':
      return 'Choose terrain';

    case 'services':
      return 'Choose Service';

    case 'build':
      return 'Choose Type';
  }
};
const WashTimes = [
  { name: 'Morning', slot: '7:00 am to 12:00 pm' },
  { name: 'Midday', slot: '12:00 pm to 3:00 pm' },
  { name: 'Afternoon', slot: '3:00 pm to 7:00 pm' },
  { name: 'Evening', slot: '7:00 am to 10:00 pm' },
];
const BeachServiceData = [
  {
    name: '2021 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
    model: '2021 Cruising, 2021 Yamaha Waverunners',
    detail:
      ' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',
    detailSub:
      'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: '2022 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],

  },
  {
    name: '2023 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],

  },
  {
    name: '2024 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
  },
  {
    name: '2025 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
  },
  {
    name: '2026 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
  },
  {
    name: '2027 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
  },
  {
    name: '2028 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
  },
  {
    name: '2029 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
  },
  {
    name: '2030 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
  },
  {
    name: '2031 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
  },
  {
    name: '2032 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    images: [YamahaJetski1, Yamahawave1, Yamahawave2],
  },
];

const DesertServiceData = [
  {
    name: '2023 Desert Thunder',
    price: 65,
    rating: 4.8,
    brand: 'DesertRunner',
    location: 'Al Wakrah, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 All-Terrain Quadbike',
    detail:
      'Conquer the sand dunes with unmatched power and precision. The Desert Thunder is built for adventure seekers ready to tackle the toughest terrains.',
    detailSub:
      'Equipped with advanced suspension systems and high-performance engines, this quadbike redefines all-terrain riding experiences.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: 'Nomad 450 AT',
    price: 70,
    rating: 4.9,
    brand: 'SandRider',
    location: 'Mesaieed, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 Extreme Desert Quad',
    detail:
      'Feel the thrill of the desert with the Nomad 450 AT. Designed for those who crave an adrenaline rush and absolute reliability on shifting sands.',
    detailSub:
      'Featuring cutting-edge navigation systems and a lightweight alloy frame for ultimate maneuverability.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: 'Dune Dominator 600',
    price: 80,
    rating: 4.7,
    brand: 'SandMaster',
    location: 'Doha, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 Rugged Quadbike',
    detail:
      'Take control of the dunes with the Dune Dominator 600. Engineered for high-speed adventure on challenging terrains.',
    detailSub:
      'Advanced shock absorbers and a turbocharged engine offer superior performance.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: 'Sand Storm Xtreme',
    price: 75,
    rating: 4.6,
    brand: 'TrailBlazer',
    location: 'Al Khor, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 Off-Road Quad',
    detail:
      'Feel the power and agility with the Sand Storm Xtreme. Perfectly crafted for thrilling desert rides.',
    detailSub:
      'Comes with advanced safety features and ergonomic design for comfort.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: 'Raptor 800X',
    price: 85,
    rating: 4.9,
    brand: 'QuadXperts',
    location: 'Abu Samra, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 Premium All-Terrain Quad',
    detail:
      'Unleash the beast on the sands with the Raptor 800X. Built for ultimate performance and endurance.',
    detailSub:
      'Includes an advanced cooling system and superior traction control.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: 'Sand Viper 400',
    price: 60,
    rating: 4.5,
    brand: 'DesertPro',
    location: 'Dukhan, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 Mid-Range Quadbike',
    detail:
      'The Sand Viper 400 offers excellent performance for riders of all levels. Ideal for desert exploration.',
    detailSub: 'Features a lightweight design and user-friendly controls.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: 'Trail Conqueror 500',
    price: 68,
    rating: 4.7,
    brand: 'QuadMaverick',
    location: 'Umm Bab, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 Desert Explorer',
    detail:
      'Challenge the trails with the Trail Conqueror 500. Designed for enthusiasts seeking new adventures.',
    detailSub: 'Comes with GPS tracking and durable tires for tough terrains.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: 'Falcon X500',
    price: 72,
    rating: 4.6,
    brand: 'SandXtreme',
    location: 'Simaisma, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 Sleek Desert Quad',
    detail:
      'Experience agility and speed with the Falcon X500. Built for smooth rides across any desert.',
    detailSub: 'Boasts a high-torque engine and seamless gear transition.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: 'Desert Phantom 700',
    price: 82,
    rating: 4.8,
    brand: 'GhostRider',
    location: 'Al Shamal, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 Elite Quadbike',
    detail:
      'Dominate the sands with the Desert Phantom 700. Designed for top-tier riders who demand the best.',
    detailSub: 'Integrated with luxury seating and premium handling features.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
  {
    name: 'SandBlazer XL',
    price: 78,
    rating: 4.7,
    brand: 'TerrainTamer',
    location: 'Lusail, Qatar',
    images: [DesertBike, DesertBike2, DesertBike3],
    model: '2023 Ultimate Quadbike',
    detail:
      'The SandBlazer XL combines power and elegance for an unparalleled desert adventure.',
    detailSub:
      'Enhanced fuel efficiency and aerodynamic design for extended rides.',
    addOn: [{ name: 'Drinks Box' }, { name: 'Home Businesses' }],
  },
];
const paymentData = [
  { name: 'Rent', amt: 150 },
  { name: 'Drinks Box', amt: 90 },
  { name: 'Home Businesses', amt: 80 },
  { name: 'Fee', amt: 30 },
];
const ServicePay = [
  { name: 'Rent', amt: 150 },
  { name: 'Fee', amt: 30 },
];

const softDrinks = [
  { name: 'Coca-Cola', price: 50, image: Dew },
  { name: 'Pepsi', price: 45, image: Pepsi },
  { name: 'Sprite', price: 40, image: Dew },
  { name: 'Fanta', price: 42, image: Fanta },
  { name: 'Mountain Dew', price: 48, image: Dew },
  { name: '7-Up', price: 38, image: Pepsi },
  { name: 'Thums Up', price: 47, image: Fanta },
  { name: 'Dr Pepper', price: 55, image: Dew },
  { name: 'Limca', price: 43, image: Fanta },
  { name: 'Mirinda', price: 40, image: Pepsi },
];
const Services = [
  { name: 'Waterproof Phone Case Rental', price: 300, image: LifeJacket },
  {
    name: 'Life Jacket Upgrade (Premium Comfort)',
    price: 500,
    image: LifeJacket,
  },
  { name: 'GoPro Camera Rental', price: 1500, image: Gopro },
  { name: 'Extra Fuel for Extended Rides', price: 800, image: LifeJacket },
  { name: 'Professional Instructor Assistance', price: 1000, image: Gopro },
  { name: 'Photo & Video Package', price: 2000, image: LifeJacket },
  { name: 'Sun Protection Kit (Sunscreen & Hat)', price: 400, image: LifeJacket },
  { name: 'Dry Bag for Belongings', price: 350, image: Gopro },
  { name: 'Locker Rental', price: 200, image: LifeJacket },
];

const places = [
  { name: 'New York' },
  { name: 'Paris' },
  { name: 'Tokyo' },
  { name: 'Sydney' },
  { name: 'Cairo' },
  { name: 'Mumbai' },
  { name: 'Rome' },
  { name: 'London' },
  { name: 'Beijing' },
  { name: 'Rio de Janeiro' },
];
const PickupData = [
  { name: 'Pickup', pickupaddress: 'Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar', icon: PickupDot },
  { name: 'DropOff', pickupaddress: 'Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar', icon: LocationPin_green },

]
const ServicesList = [
  {
    name: 'Badri Cleanups',
    location: 'Abu Hamour, Doha',
    image: Jetski,
    model: '2021 Cruising, 2021 Yamaha Waverunners',
    status: 'completed',
    date: '23, December, 2020',
    time: 'Morning',
    total: 200,
    servicename: 'Cleaning',
    size: '4 x 6',
    rating: 4,
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing ',
  },
  {
    name: 'Luxury Auto Detailing',
    location: 'Al Sadd, Doha',
    image: Jetski,
    model: '2022 Tesla Model X',
    status: 'pending',
    date: '15, March, 2021',
    time: 'Afternoon',
    rating: 2,
    total: 350,
    servicename: 'Detailing',
    size: 'Full Size',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing ',
  },
  {
    name: 'Yacht Polishing',
    location: 'The Pearl, Doha',
    image: Jetski,
    model: '2020 Azimut Grande',
    status: 'in-progress',
    date: '12, January, 2023',
    time: 'Morning',
    rating: 3,
    total: 500,
    servicename: 'Polishing',
    size: '75 ft',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing ',
  },
  {
    name: 'Speedboat Maintenance',
    location: 'Lusail Marina, Doha',
    image: Jetski,
    model: '2023 Bayliner VR6',
    status: 'completed',
    date: '5,November, 2022',
    rating: 5,
    time: 'Evening',
    total: 250,
    servicename: 'Maintenance',
    size: '20 ft',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing ',
  },
  {
    name: 'Home Pool Cleaning',
    location: 'West Bay, Doha',
    image: Jetski,
    rating: 0,
    model: 'N/A',
    status: 'completed',
    date: '30, April, 2021',
    time: 'Morning',
    total: 150,
    servicename: 'Cleaning',
    size: '10 x 20',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing ',
  },
  {
    name: 'Garden Landscaping',
    location: 'Al Waab, Doha',
    image: Jetski,
    model: '2022 Modern Designs',
    rating: 4,
    status: 'pending',
    date: '20, February, 2024',
    time: 'Afternoon',
    total: 400,
    servicename: 'Landscaping',
    size: '30 x 40',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing ',
  },
];
const CabanaList = [
  {
    name: 'Family Cabana',
    builder: 'Al-Rayyan Co.',
    size: '6X4',
    price: 250,
    image: Family_Cabana,
    address: 'Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar',
    features: [
      { featureName: 'Kitchen', qty: 1, image: Kitchen },
      { featureName: 'Rooms', qty: 1, image: Rooms },
      { featureName: 'AC', qty: 1, image: Condition },
      { featureName: 'Bathroom', qty: 1, image: BathroomSide },
    ],
  },
  {
    name: 'Coffee Shop Cabana',
    builder: 'Al-Sad Co.',
    size: '6X4',
    price: 250,
    image: CoffeeCabana,
  },
  {
    name: 'XL Family Cabana',
    builder: 'Amaar Co.',
    size: '6X4',
    price: 250,
    image: XlCabana,
  },
];
const SupportData = [
  { title: 'Name', key: 'Name' },
  { title: 'Email', key: 'Email' },
  { title: 'Phone Number', key: 'PhoneNumber' },
  { title: 'Purpose Of Contact', key: 'PurposeOfContact' },
  { title: 'Message', key: 'Message' },
];
const PrivacyPolicyData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet,',
    text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
  },
  {
    id: 2,
    title: 'dolore magna aliquyam erat,',
    text: 'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,',
  },
  {
    id: 3,
    title: ' sed diam voluptua.',
    text: 'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,',
  },
];
const CustomDrawerData = [
  { id: 1, title: 'Home', icon: Home, navigate: 'Home' },
  { id: 2, title: 'My Profile', icon: Profile, navigate: 'MyProfile' },
  { id: 3, title: 'About Us', icon: AboutUS, navigate: 'AboutUs' },
  { id: 4, title: 'Support', icon: Support, navigate: 'Support' },
  {
    id: 5,
    title: 'Privacy Policy',
    icon: PrivacyPolicy,
    navigate: 'PrivacyPolicy',
  },
  { id: 6, title: 'Logout', icon: Logout, navigate: 'Login' },
];
const MyProfileDataItems = [
  { icon: Profile, title: 'Edit Profile', navigate: 'EditProfile' },
  { icon: Clipboard, title: 'My Activities', navigate: 'MyActivities' },
  { icon: Gift0, title: 'Membership', navigate: 'Membership' },
];
const HistoryData = [
  {
    name: '2031 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    image: YamahaJetski1,
    model: '2021 Cruising, 2021 Yamaha Waverunners',
    detail:
      ' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',
    detailSub:
      'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',
    addOn: { DrinksBox: [{ name: 'Pepsi', qty: 2 }, { name: 'ThumbsUp', qty: 1 }], HomeBusinesses: [{ name: 'HomeMade Sweet', qty: 2 }, { name: 'Pottery', qty: 1 }] },

    status: 'completed',
    date: '23,December,2020',
    time: ['09:00 am', '10:00 am', '11:00 am'],
    type: 'rent'
  },
  {
    name: '2020 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    image: YamahaJetski1,
    model: '2021 Cruising, 2021 Yamaha Waverunners',
    detail:
      ' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',
    detailSub:
      'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',

    status: 'pending',
    date: '24,December,2020',
    time: ['09:00 am', '10:00 am', '11:00 am'],
    type: 'rent'


  },
  {
    name: '2021 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    image: YamahaJetski1,
    model: '2021 Cruising, 2021 Yamaha Waverunners',
    detail:
      ' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',
    detailSub:
      'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',

    status: 'completed',
    date: '26,December,2020',
    time: ['09:00 am', '10:00 am', '11:00 am'],
    type: 'rent'


  },
  {
    name: '2021 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    image: YamahaJetski1,
    model: '2021 Cruising, 2021 Yamaha Waverunners',
    detail:
      ' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',
    detailSub:
      'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',
    addOn: [{ name: 'Drinks Box', qty: 5 }, { name: 'Home Businesses', qty: 0 }],

    status: 'pending',
    date: '29,December,2020',
    time: ['09:00 am', '10:00 am', '11:00 am'],
    type: 'rent'


  },
  {
    name: '2021 FX SVHO',
    price: 50,
    rating: 5,
    brand: 'Yamaha',
    location: 'Abu Hamour, Doha',
    image: YamahaJetski1,
    model: '2021 Cruising, 2021 Yamaha Waverunners',
    detail:
      ' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',
    detailSub:
      'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',
    addOn: [{ name: 'Drinks Box', qty: 2 }, { name: 'Home Businesses', qty: 1 }],
    status: 'completed',
    date: '31,December,2020',
    time: ['09:00 am', '10:00 am', '11:00 am'],
    type: 'rent'


  },
];
const HistoryServicesData = [
  {
    name: 'Badri Cleanups',
    location: 'Abu Hamour, Doha',
    image: YamahaJetski1,
    model: '2021 Cruising, 2021 Yamaha Waverunners',
    status: 'completed',
    date: '23, December, 2020',
    time: 'Morning',
    total: 200,
    servicename: 'Cleaning',
    size: '4 x 6',
    subtype: 'towing'
  },
  {
    name: 'Luxury Auto Detailing',
    location: 'Al Sadd, Doha',
    image: YamahaJetski1,
    model: '2022 Tesla Model X',
    status: 'pending',
    date: '15, March, 2021',
    time: 'Afternoon',
    total: 350,
    servicename: 'Detailing',
    size: 'Full Size',
    subtype: 'towing'

  },
  {
    name: 'Yacht Polishing',
    location: 'The Pearl, Doha',
    image: YamahaJetski1,
    model: '2020 Azimut Grande',
    status: 'in-progress',
    date: '12, January, 2023',
    time: 'Morning',
    total: 500,
    servicename: 'Polishing',
    size: '75 ft',
    subtype: 'towing'

  },
  {
    name: 'Speedboat Maintenance',
    location: 'Lusail Marina, Doha',
    image: YamahaJetski1,
    model: '2023 Bayliner VR6',
    status: 'completed',
    date: '5,November, 2022',
    time: 'Evening',
    total: 250,
    servicename: 'Maintenance',
    size: '20 ft',
    subtype: 'towing'

  },
  {
    name: 'Home Pool Cleaning',
    location: 'West Bay, Doha',
    image: YamahaJetski1,
    model: 'N/A',
    status: 'completed',
    date: '30, April, 2021',
    time: 'Morning',
    total: 150,
    servicename: 'Cleaning',
    size: '10 x 20',
    subtype: 'washing'

  },
  {
    name: 'Garden Landscaping',
    location: 'Al Waab, Doha',
    image: YamahaJetski1,
    model: '2022 Modern Designs',
    status: 'pending',
    date: '20, February, 2024',
    time: 'Afternoon',
    total: 400,
    servicename: 'Landscaping',
    size: '30 x 40',
    subtype: 'towing'

  },
];
const HistoryBuildData = [
  {
    name: 'Badri Cleanups',
    location: 'Abu Hamour, Doha',
    image: YamahaJetski1,
    model: '2021 Cruising, 2021 Yamaha Waverunners',
    status: 'completed',
    buildtype: 'standard',
    date: '23, December, 2020',
    time: 'Morning',
    total: 200,
    servicename: 'Cleaning',
  },
  {
    name: 'Luxury Auto Detailing',
    location: 'Al Sadd, Doha',
    image: YamahaJetski1,
    model: '2022 Tesla Model X',
    status: 'pending',
    buildtype: 'Custom',
    date: '15, March, 2021',
    time: 'Afternoon',
    total: 350,
    servicename: 'Detailing',
  },
  {
    name: 'Yacht Polishing',
    location: 'The Pearl, Doha',
    image: YamahaJetski1,
    model: '2020 Azimut Grande',
    status: 'in-progress',
    buildtype: 'Custom',
    date: '12, January, 2023',
    time: 'Morning',
    total: 500,
    servicename: 'Polishing',
  },
  {
    name: 'Speedboat Maintenance',
    location: 'Lusail Marina, Doha',
    image: YamahaJetski1,
    model: '2023 Bayliner VR6',
    status: 'completed',
    buildtype: 'standard',
    date: '5, November, 2022',
    time: 'Evening',
    total: 250,
    servicename: 'Maintenance',
  },
  {
    name: 'Home Pool Cleaning',
    location: 'West Bay, Doha',
    image: YamahaJetski1,
    model: 'N/A',
    status: 'completed',
    buildtype: 'standard',
    date: '30, April, 2021',
    time: 'Morning',
    total: 150,
    servicename: 'Cleaning',
  },
  {
    name: 'Garden Landscaping',
    location: 'Al Waab, Doha',
    image: YamahaJetski1,
    model: '2022 Modern Designs',
    status: 'pending',
    buildtype: 'Custom',
    date: '20, February, 2024',
    time: 'Afternoon',
    total: 400,
    servicename: 'Landscaping',
  },
];
const HistoryHeaders = [{ name: 'Rent' }, { name: 'Services' }, { name: 'Build' }];
const AboutCompanyData =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren';
const MyBuildHeader = [
  { id: 1, name: 'Standard' },
  { id: 2, name: 'Custom' },
];
const MybuildStandardData = [
  {
    name: 'Family Cabana',
    builder: 'Al-Rayyan Co.',
    size: '6X4',
    price: 250,
    image: Family_Cabana,
    type: 'booked',
  },
  {
    name: 'Coffee Shop Cabana',
    builder: 'Al-Sad Co.',
    size: '6X4',
    price: 250,
    image: CoffeeCabana,
    type: 'booked',
  },
  {
    name: 'XL Family Cabana',
    builder: 'Amaar Co.',
    size: '6X4',
    price: 250,
    image: XlCabana,
    type: 'booked',
  },
];
const MybuildCustomData = [
  {
    name: 'Coffee Shop Cabana',
    builder: 'Al-Sad Co.',
    size: '6X4',
    price: 250,
    image: CoffeeCabana,
    type: 'booked',
  },
  {
    name: 'XL Family Cabana',
    builder: 'Amaar Co.',
    size: '6X4',
    price: 250,
    image: XlCabana,
    type: 'booked',
  },
  {
    name: 'Family Cabana',
    builder: 'Al-Rayyan Co.',
    size: '6X4',
    price: 250,
    image: Family_Cabana,
    type: 'booked',
  },
]
const PointHistoryData = [
  { name: 'Rentals', date: '03 Jun 2021', image: Rent_White, point: 120, type: 'inc' },
  { name: 'Services', date: '02 Jun 2021', image: Towing_White, point: 120, type: 'inc' },
  { name: 'Builds', date: '01 Jun 2021', image: Build_White, point: 120, type: 'dec' },
  { name: 'Rentals', date: '03 Jun 2021', image: Rent_White, point: 120, type: 'inc' },
  { name: 'Services', date: '02 Jun 2021', image: Towing_White, point: 120, type: 'inc' },
  { name: 'Builds', date: '01 Jun 2021', image: Build_White, point: 120, type: 'dec' },
  { name: 'Rentals', date: '03 Jun 2021', image: Rent_White, point: 120, type: 'inc' },
  { name: 'Services', date: '02 Jun 2021', image: Towing_White, point: 120, type: 'inc' },
  { name: 'Builds', date: '01 Jun 2021', image: Build_White, point: 120, type: 'dec' },
]

export default {
  MembershipData,
  MyBuildHeader,
  MybuildCustomData,
  MybuildStandardData,
  RentData,
  HistoryServicesData,
  ServicesData,
  BuildData,
  HomeData,
  HomeHeader,
  SignupFields,
  ServiceSelectionData,
  ServiceSelectionHeaders,
  BeachServiceData,
  WashTimes,
  DesertServiceData,
  ServicePay,
  Services,
  softDrinks,
  paymentData,
  places,
  ServicesList,
  CabanaList,
  CompanyName,
  AboutCompanyData,
  SupportData,
  PrivacyPolicyData,
  CustomDrawerData,
  UserData,
  MyProfileDataItems,
  HistoryData,
  HistoryBuildData,
  HistoryHeaders,
  LanguagetoCheck,
  PickupData, PointHistoryData
};
