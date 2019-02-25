import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import styles from './Styles/RestaurantCardStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'

import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import StarRating from './StarRating';

// Note that this file (App/Components/RestaurantCard) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Rounded Button', () =>
  <RestaurantCard
    text='real buttons have curves'
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
)

const price_range = ['$', '$$', '$$$', '$$$$', '$$$$$'];

export default class RestaurantCard extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string,
    cuisine: PropTypes.string,
    cost: PropTypes.string,
    imgUri: PropTypes.string,
    rating: PropTypes.number,
    restaurant: PropTypes.object
  };

  render () {
    const { restaurant } = this.props.restaurant;
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Card style={styles.cardContent}>
          <View style={styles.contentContainer}>
            <Image
              style={{width: 65, height: 65 }}
              source={{uri: restaurant.thumb}}
            />
            <View style={styles.restaurantInformationContainer}>
              <Text style={styles.restaurantNameText}>{restaurant.name}</Text>
              <View style={styles.costRatingsContainer}>
                <StarRating rating={restaurant.user_rating.aggregate_rating}/>
                <Text style={styles.cuisineText}>{restaurant.user_rating.rating_text} </Text>
                <Text style={styles.cuisineText}>{price_range[restaurant.price_range]}</Text>
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
