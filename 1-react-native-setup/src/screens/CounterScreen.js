import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const CounterScreen = () => {
    const [ counter, setCounter ] = useState(0);

    return <View>
       <Button
        title="Increase Counter"
        onPress = {() => setCounter(counter + 1)}></Button>
        <Button
        title="Decrease Counter"
        onPress = {() => setCounter(counter - 1)}></Button>
        <Text>Count: {counter}</Text>
    </View>
}

const style = StyleSheet.create({});

export default CounterScreen;