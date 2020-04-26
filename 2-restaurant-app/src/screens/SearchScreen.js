import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, searchApi, error] =  useResult();
    
    filterResultsByPrice = (price) => {
        //price can be '$', '$$', '$$$'
        return results.filter(result => result.price === price)
    }

    return <View>
        <SearchBar
            term = {term}
            onTermChange = {(newTerm) => setTerm(newTerm)}
            onTermSubmit = {() => searchApi(term)}
        ></SearchBar>
        <Text>Search Screen</Text>
        <ResultList results={filterResultsByPrice('$')} title="Cost Effective"></ResultList>
        <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"></ResultList>
        <ResultList results={filterResultsByPrice('$$$')} title="Big Spender"></ResultList>
    </View>
}

const style = StyleSheet.create({});

export default SearchScreen;