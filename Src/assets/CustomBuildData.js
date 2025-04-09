import { BathroomSize, BathroomType, CabanSize, CabanSize_green, carpet, CompassNorthEast, Condition, CornerWardrobe, Fiber, GalvanisedIron, HingeDoor, Lifters, LocationPin, Maps, Nothing, OuterCover, Paint, parquet, RoomFloor, SlidingDoor, tile, TowHook, WalkinWardrobe, Wall, Wallpaper, Wardrobe, WaterTank, WindowShutter, WindowSize } from './Images';

const CustomBuildData = () => {
  const data = {
    cabanSize: {
      id: 1,
      title: "Caban Size",
      key: "cabanSize",
      image: CabanSize_green,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        { inputType: "TextInput", data: ["height", "width"] }
      ],
    },
    bathroomSize: {
      id: 2,
      title: "Bathroom Size",
      key: "bathroomSize",

      image: BathroomSize,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection',
          data: [
            { Dataname: 'Standard', size: '160 x 160 CM²' },
            { Dataname: 'Medium', size: '180 x 180 CM²' },
            { Dataname: 'Large Size', size: '200 x 200 CM²' },
          ],
        }
      ],
    },
    roomFloor: {
      id: 3,
      title: "Room Floor",
      key: "roomFloor",
      image: RoomFloor,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection-Image',
          data: [
            { Dataname: 'Paraquet', image: parquet },
            { Dataname: 'Carpets', image: carpet },
            { Dataname: 'Marble Alternative', image: tile },
            { Dataname: 'Nothing', image: Nothing },
          ],
        },
      ],
    },
    wardrobe: {
      id: 4,
      title: "Wardrobe",
      key: "wardrobe",
      image: Wardrobe,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection-Image',
          data: [
            { Dataname: 'Sliding Door', image: SlidingDoor },
            { Dataname: 'Hinge Door', image: HingeDoor },
            { Dataname: 'Corner Wardrobe', image: CornerWardrobe },
            { Dataname: 'Walk-in-wardrobe', image: WalkinWardrobe },
          ],
        },
      ],
    },
    theWall: {
      id: 5,
      title: "The Wall",
      key: "theWall",
      image: Wall,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection-Image',
          data: [
            { Dataname: 'WallPaper', image: Wallpaper },
            { Dataname: 'Paint', image: Paint },
            { Dataname: 'Nothing', image: Nothing },
          ],
        },
      ],
    },
    windowSize: {
      id: 6,
      title: "Windows Size",
      key: "windowSize",
      image: WindowSize,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection',
          data: [
            { Dataname: 'Standard', size: '160 x 160 CM²' },
            { Dataname: 'Medium', size: '180 x 180 CM²' },
            { Dataname: 'Large Size', size: '200 x 200 CM²' },
          ],
        },
      ],
    },
    windowShutter: {
      id: 7,
      key: "windowShutter",
      title: "Windows Shutters",
      image: WindowShutter,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection-Horizontal',
          data: [
            { Dataname: 'Yes', subData: 'With Shutters' },
            { Dataname: 'No', subData: 'Without Shutters' },
          ],
        },
      ],
    },
    lifters: {
      id: 8,
      title: "lifters",
      key: "lifters",
      image: Lifters,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection-Horizontal',
          data: [
            { Dataname: '(X2) Lifters', subData: 'Only in the front' },
            { Dataname: '(X4) Lifters', subData: 'To all sides' },
          ],
        },
      ],
    },
    bathroomType: {
      id: 9,
      title: "Bathroom Type",
      key: "bathroomType",
      image: BathroomType,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection-Horizontal',
          data: [
            { Dataname: 'Standard', subData: 'Classic' },
            { Dataname: 'Custome', subData: 'Select One' },
          ],
        },
      ],
    },
    condition: {
      id: 10,
      title: "Condition",
      key: "condition",
      image: Condition,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection-Horizontal2',
          data: [
            { Dataname: '(1) Ton' },
            { Dataname: '(1) Ton X 2' },
            { Dataname: '(2) Ton' },
            { Dataname: '(2) Ton X 2' },
            { Dataname: '(2.5) Ton' },
            { Dataname: '(2.5) Ton X 2' },
            { Dataname: 'Without' },
          ],
        },
      ],
    },
    outerCover: {
      id: 11,
      title: "Outer Cover",
      key: "outerCover",
      image: OuterCover,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection-Image',
          data: [
            { Dataname: 'Galvanised Iron', image: GalvanisedIron },
            { Dataname: 'Fiber Door', image: Fiber },
          ],
        },
      ],
    },
    waterTank: {
      id: 12,
      title: "Water Tank",
      key: "waterTank",
      image: WaterTank,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        {
          inputType: 'Selection',
          data: [
            { Dataname: '500 Liter' },
            { Dataname: '1000 Liter' },
            { Dataname: '1500 Liter' },
            { Dataname: '2000 Liter' },
          ],
        },
      ],
    },
    towHook: {
      id: 13,
      title: "Tow Hook",
      key: "towHook",
      image: TowHook,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      flatlistData: [
        { inputType: "TextInput", data: ["height", "width"] }
      ],
    },
    NameOfCustomization: {
      id: 14,
      title: "Name Of Customization",
      key: "NameOfCustomization",
      image: Maps,
      buildingName: "Mirqab Mall",
      address: "Al Mirqab Al Jadeed St, Doha, Qatar",
      icons: [LocationPin, CompassNorthEast],
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
      flatlistData: [
        { inputType: "TextInput", data: ["Add Name"] }
      ],
    },
  };

  return data;
};

export default CustomBuildData;
