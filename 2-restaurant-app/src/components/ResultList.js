import * as React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const ResultList = ({title, results}) => {

    return (
        <View style={styles.backgroundStyle}>
            <Text>{title}</Text>
            <FlatList
            horizontal
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return <Text>item.name</Text>
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultList;