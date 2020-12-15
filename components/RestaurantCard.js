import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity,
  Linking 
} from 'react-native'

const RestaurantCard = ({ restaurant, index }) => {

  return (
    <View style={styles.container}>
      <Image style={styles.cardImage} source={{uri: restaurant.image_url}}/>
      <View style={styles.infoContainer}>
        <View style={styles.rowView}>
          <Text style={styles.name}> {index}. {restaurant.name}</Text>
          <Text style={styles.price}>{restaurant.price}</Text>
        </View>
        <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
        <Text style={styles.address}>Location: {restaurant.location.address1}</Text>
        <View style={[styles.rowView, {justifyContent: "flex-start"}]}>
          {restaurant.categories.map((category, index) => (
            <Text key={index}>{category.title},</Text>
          ))}
        </View>
        <TouchableOpacity 
          style={styles.visitWebsiteButton}
          onPress={() => Linking.openURL(restaurant.url)}
        >
            <Text style={styles.buttonText}>Visit Website!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "hsl(0, 0%, 50%)",
    paddingVertical: 20
  },
  cardImage: {
    width: '100%',
    height: 150
  },
  infoContainer: {
    marginVertical: 15,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    color: 'green'
  },
  rating: {
    marginVertical: 5
  },
  address: {
    color: 'hsl(0, 0%, 45%)'
  },
  visitWebsiteButton: {
    backgroundColor: "#0009ff",
    padding: 10,
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 8
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    color: "white",
    fontSize: 16
  }
})

export default RestaurantCard;
