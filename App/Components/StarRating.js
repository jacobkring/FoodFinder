// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import styles from './Styles/StarRatingStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'

import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

// Note that this file (App/Components/RestaurantCard) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Star Rating', () =>
  <StarRating
    rating={2.5}
  />
);


export default class StarRating extends Component {
  static propTypes = {
    rating: PropTypes.number
  };

  render () {

    const rating = Math.round(this.props.rating*2)/2;

    return (
      <View style={styles.container}>
        <Icon style={{ color: rating >= .5 ? '#ffd700' : 'rgb(215,215,215)'}} name={rating > 1 ? "star" : rating === .5 ? "star-half-o" : "star-o"}/>
        <Icon style={{ color: rating >= 1.5 ? '#ffd700' : 'rgb(215,215,215)'}} name={rating >= 2 ? "star" : rating === 1.5 ? "star-half-o" : "star-o"}/>
        <Icon style={{ color: rating >= 2.5 ? '#ffd700' : 'rgb(215,215,215)'}} name={rating >= 3 ? "star" : rating === 2.5 ? "star-half-o" : "star-o"}/>
        <Icon style={{ color: rating >= 3.5 ? '#ffd700' : 'rgb(215,215,215)'}} name={rating >= 4 ? "star" : rating === 3.5 ? "star-half-o" : "star-o"}/>
        <Icon style={{ color: rating >= 4.5 ? '#ffd700' : 'rgb(215,215,215)'}} name={rating >= 5 ? "star" : rating === 4.5 ? "star-half-o" : "star-o"}/>
      </View>
    )
  }
}
