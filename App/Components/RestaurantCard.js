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

export default class RestaurantCard extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string,
    cuisine: PropTypes.string,
    cost: PropTypes.string,
    imgUri: PropTypes.string,
    rating: PropTypes.number
  };

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Card>
          <View style={styles.contentContainer}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: 'https://picsum.photos/700'}}
            />
            <View style={styles.restaurantInformationContainer}>
              <Text style={styles.restaurantNameText}>{this.props.name}</Text>
              <View style={styles.costRatingsContainer}>
                <Text style={styles.cuisineText}>{this.props.cost}</Text>
                <StarRating rating={this.props.rating}/>
              </View>
              <Text style={styles.cuisineText}>{this.props.cuisine}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }
}
