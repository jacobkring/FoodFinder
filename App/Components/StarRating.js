// @flow
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/StarRatingStyle'
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  rating: number
}

export default class StarRating extends Component<Props> {
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
