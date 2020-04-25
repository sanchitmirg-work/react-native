import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import IncreaseDecreaseButton from '../components/IncreaseDecreaseButton';

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    
    return (
        <View>
            <IncreaseDecreaseButton name="Red" increaseCallback={() => setRed(red + 15)} decreaseCallback={() => setRed(red - 15)}></IncreaseDecreaseButton>
            <IncreaseDecreaseButton name="Green" increaseCallback={() => setGreen(green + 15)} decreaseCallback={() => setGreen(green - 15)}></IncreaseDecreaseButton>
            <IncreaseDecreaseButton name="Blue" increaseCallback={() => setBlue(blue + 15)} decreaseCallback={() => setBlue(blue - 15)}></IncreaseDecreaseButton>
            <View style={{height:100,  width:100,  backgroundColor:`rgb(${red}, ${green}, ${blue})`}}>
        
            </View>
        </View>
    )
}

const style = StyleSheet.create({

})

export default SquareScreen;