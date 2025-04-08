import { View, Text, Image } from 'react-native'
import React, { Children } from 'react'
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import Constants from '../Constants'
import Svg, { Path } from 'react-native-svg'
import { DrawerUpperImage } from '../assets/Images'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS


const DrawerSceneContainer = ({ children }) => {
    const DrawerProgress = useDrawerProgress()
    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(DrawerProgress.value, [0, 1], [1, 0.73]);
        const borderRadius = interpolate(DrawerProgress.value, [0, 1], [0, SCREEN_HEIGHT * 0.03]);

        return {
            transform: [{ scale }],
            borderRadius
        };
    });
    return (
        <Animated.View style={[{ flex: 1 }, animatedStyle]}>
            {children}
        </Animated.View >
    )
}

export default DrawerSceneContainer