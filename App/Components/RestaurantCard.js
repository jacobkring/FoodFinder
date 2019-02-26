// @flow
import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import styles from './Styles/RestaurantCardStyle'

import { Card } from 'react-native-paper';

import StarRating from './StarRating';

const priceRange = ['$', '$$', '$$$', '$$$$', '$$$$$'];

type Props = {
  onPress: Function,
  restaurant: Object
}

export default class RestaurantCard extends Component<Props> {
  render () {
    const { restaurant } = this.props.restaurant
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Card style={styles.cardContent}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.restaurantThumb}
              source={{uri: restaurant.thumb}}
            />
            <View style={styles.restaurantInformationContainer}>
              <Text style={styles.restaurantNameText}>{restaurant.name}</Text>
              <View style={styles.costRatingsContainer}>
                <StarRating rating={restaurant.user_rating.aggregate_rating} />
                <Text style={styles.cuisineText}>{restaurant.user_rating.rating_text} </Text>
                <Text style={styles.cuisineText}>{priceRange[restaurant.price_range]}</Text>
              </View>
              <Text style={styles.cuisineText}>{restaurant.cuisines}</Text>
            </View>
          </View>
          <Text style={styles.cuisineText}>{restaurant.location.address}</Text>
        </Card>
      </TouchableOpacity>
    )
  }
}
