import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [searchText, setSearchText] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <View>
            <SearchBar
                searchText={searchText}
                //onSearchTextChange={(newText) => setSearchText(newText)}
                onSearchTextChange={setSearchText} // better syntax
                onSearchTextSubmit={() => searchApi(searchText)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.   </Text>
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
            <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
            <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default  SearchScreen