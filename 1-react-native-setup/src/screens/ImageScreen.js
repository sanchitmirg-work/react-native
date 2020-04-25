import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail name="Forest" imageSource={require('../../assets/forest.jpg')}></ImageDetail>
        <ImageDetail name="Mountain" imageSource={require('../../assets/mountain.jpg')}></ImageDetail>
        <ImageDetail name="Beach" imageSource={require('../../assets/beach.jpg')}></ImageDetail>
    </View>
}

const style = StyleSheet.create({});

export default ImageScreen;