import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
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
        <View style={styles.container}> 
            {/* or we can use <></> empty tags instead of view */}
            <SearchBar
                searchText={searchText}
                //onSearchTextChange={(newText) => setSearchText(newText)}
                onSearchTextChange={setSearchText} // better syntax
                onSearchTextSubmit={() => searchApi(searchText)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'  />
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
                <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default SearchScreen