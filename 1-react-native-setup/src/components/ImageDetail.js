import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return <View>
        <Text>{props.name}</Text>
        <Image source={props.imageSource}/>
    </View>
}

const style = StyleSheet.create({});

export default ImageDetail;