import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, StyleSheet, ScrollView, TextInput, Button } from 'react-native'
import RestaurantCard from './RestaurantCard'

const apiKey =  '622EwNT_lh5jzHLVgFYW3llOHg8hW35aWTw9SgyXiHi6QtKM47kHnjwap3ebcxSEZ2zJpJy2vZZJx0NtyYS4EAOCMT0t7K2hMv2hVs3DtZm4-tTt3llveOX-pkfRX3Yx'
const apiUrl = 'https://api.yelp.com/v3/businesses/search?location=Denver&term=restaurants'


const RestaurantsContainer = () => {
  const dispatch = useDispatch()
  const restaurants = useSelector(state => state.restaurants)

  const [ searchTerm, setSearchTerm ] = useState('')

  useEffect(() => {
    fetch(apiUrl, {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    }).then(response => response.json())
      .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
  }, [])

  const showRestaurants = () => restaurants.map((restaurant, i) => {
    return <RestaurantCard 
    restaurant={restaurant} 
    key={restaurant.id} 
    index={i + 1}/>
  })

  const handleSearchText = (text) => {
    setSearchTerm(text)
  }

  const handleSearch = () => {
    const updatedUrl = `https://api.yelp.com/v3/businesses/search?location=${searchTerm}&term=restaurants`

    fetch(updatedUrl, {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
  }

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.search}
          onChangeText={handleSearchText} 
          value={searchTerm}
          />
        <Button 
          style={styles.searchButton}
          onPress={handleSearch}
          title='Search' 
          />
      </View>
      <ScrollView style={styles.container}>
        {showRestaurants()}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  searchContainer: {
    flexDirection: 'row' 
  },
  search: {
    height: 40, 
    flex: 2,
    borderColor: 'gray', 
    borderWidth: 1,
    marginHorizontal: 15,
    paddingHorizontal: 15
  },
  searchButton: {
    flex: 1
  }
})

export default RestaurantsContainer;
