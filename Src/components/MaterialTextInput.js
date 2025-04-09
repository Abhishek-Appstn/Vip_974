import { View, Text, StatusBar, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing
} from 'react-native-reanimated'
import Constants from '../Constants'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS


const MaterialTextInput = ({
    label = 'Label',
    containerStyle,
    inputStyle,
    labelStyle,
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const labelPosition = useSharedValue(0)
    const labelScale = useSharedValue(1)
    const [value, setValue] = useState('')
    const inputRef = useRef()

    const animatedLabelStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: labelPosition.value },
                { scale: labelScale.value }
            ],
        }
    })

    const handleFocus = () => {
        setIsFocused(true)
        labelPosition.value = withTiming(-SCREEN_HEIGHT * .02, {
            duration: 200,
            easing: Easing.out(Easing.ease)
        })
        labelScale.value = withTiming(0.8, {
            duration: 200,
            easing: Easing.out(Easing.ease)
        })
    }

    const handleBlur = () => {
        setIsFocused(false)
        if (!value) {
            labelPosition.value = withTiming(0, {
                duration: 200,
                easing: Easing.out(Easing.ease)
            })
            labelScale.value = withTiming(1, {
                duration: 200,
                easing: Easing.out(Easing.ease)
            })
        }
    }

    return (
        <View style={[{
            marginTop: StatusBar.currentHeight,
            width: SCREEN_WIDTH * .9,
            alignSelf: 'center',
            height: SCREEN_HEIGHT * .07,
            justifyContent: 'center',
            backgroundColor: Colors.Black,
            borderRadius: 10, overflow: 'hidden',
            borderWidth: 1, borderColor: isFocused ? Colors.Green1 : null
        }, containerStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', paddingBottom: SCREEN_HEIGHT * .015, paddingHorizontal: SCREEN_WIDTH * .02, flex: 1, }}>
                {isFocused ? <TextInput style={{ color: Colors.Green1, fontSize: 16, fontFamily: 'Gibson', }} value='+974'></TextInput> : null}
                <TextInput
                    ref={inputRef}
                    onChangeText={text => setValue(text)}
                    style={[{
                        flex: 1, paddingHorizontal: SCREEN_WIDTH * .01,
                        fontSize: 16, fontFamily: 'Gibson',
                        color: '#fff',
                    }, inputStyle]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                />
                {isFocused ? <Text style={{ color: Colors.Green1 }}>M2</Text> : null}


            </View>
            <Animated.Text
                style={[{
                    position: 'absolute',
                    color: Colors.White
                }, labelStyle, animatedLabelStyle]}
                onPress={() => inputRef.current.focus()}
            >
                {label}
            </Animated.Text>

        </View>
    )
}

export default MaterialTextInput