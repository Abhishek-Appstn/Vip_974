import { View, Text } from 'react-native';
import React from 'react';
import Constants from '../Constants';
import { useSelector } from 'react-redux';
import Utils from '../Utils';
import { Minus, Plus } from '../assets/Images';
import IconComponent from './IconComponent';

const { Colors } = Constants;
const { SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS;

const CartIncrementButtons = ({ item, SelectedAddon, setSelectedAddon, Choosen }) => {
    const language = useSelector((state) => state.Language.value);
    const CustomFlexDirection = Utils.flexDirection(language);

    const handleNavigation = ({ type }) => {
        switch (type) {
            case 'inc':
                setSelectedAddon((prevState) => {
                    const newState = {
                        ...prevState,
                        [Choosen]: {
                            ...prevState[Choosen],
                            [item.name]: {
                                ...item,
                                selectedQty: (prevState[Choosen]?.[item.name]?.selectedQty || 0) + 1,
                            },
                        },
                    };
                    console.log('Incremented State:', newState);
                    return newState;
                });
                break;
            case 'dec':
                setSelectedAddon((prevState) => {
                    const currentQty = prevState[Choosen]?.[item.name]?.selectedQty || 0;
                    if (currentQty > 0) {
                        const newState = {
                            ...prevState,
                            [Choosen]: {
                                ...prevState[Choosen],
                                [item.name]: {
                                    ...item,
                                    selectedQty: currentQty - 1,
                                },
                            },
                        };
                        console.log('Decremented State:', newState);
                        return newState;
                    }
                    console.log('State unchanged:', prevState);
                    return prevState;
                });
                break;
            default:
                break;
        }
    };

    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: SCREEN_WIDTH * 0.25,
                },
                CustomFlexDirection,
            ]}
        >
            <IconComponent image={Minus} onPress={() => handleNavigation({ type: 'dec' })} />
            <Text style={{ color: Colors.Green1, fontFamily: 'Gibson', fontSize: 12, fontWeight: '500' }}>
                {SelectedAddon[Choosen]?.[item.name]?.selectedQty || 0}
            </Text>
            <IconComponent image={Plus} onPress={() => handleNavigation({ type: 'inc' })} />
        </View>
    );
};

export default CartIncrementButtons;