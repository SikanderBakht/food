import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'


const SearchScreen = () => {
    const [searchText, setSearchText] = useState('') 
    return (
        <View>
            <SearchBar searchText={searchText} onSearchTextChange={(newText) => setSearchText(newText)}/>
            <Text>Search Screen</Text>
        </View>
    )
}

const styles= StyleSheet.create({

})

export default SearchScreen