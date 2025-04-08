import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

const AnimatedListView = ({ children }) => {
    const animationProgress = useSharedValue(0);

    useEffect(() => {
        animationProgress.value = withTiming(1, { duration: 500 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: animationProgress.value,
            transform: [
                {
                    translateY: (1 - animationProgress.value) * 20
                }
            ]
        };
    });

    return (
        <Animated.View style={[animatedStyle]}>
            {children}
        </Animated.View>
    );
};

export default AnimatedListView;
