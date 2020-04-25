import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const IncreaseDecreaseButton = ({name, increaseCallback, decreaseCallback}) => {

    return (
        <View>
            <Button titile={`Increase ${name}`} onPress={() => increaseCallback()}/>
            <Button titile={`Decrease ${name}`} onPress={() => decreaseCallback()}/>
        </View>
    )
}

const style = StyleSheet.create({

})

export default IncreaseDecreaseButton;