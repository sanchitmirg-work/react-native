import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Text>Search Bar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5
    }
});

export default SearchBar;