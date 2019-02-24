import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './Styles/CitySelectorStyle'

import { Dropdown } from 'react-native-material-dropdown';

export default class CitySelector extends Component {
  state = {
    visible: false,
    selectedCity: 'New York'
  };

  render () {
    const { visible } = this.state;
    const cities = [
      { value: 'New York'},
      { value: 'Pittsburgh'}
    ];

    return (
      <View style={styles.selectorStyle}>
        <Dropdown
          fontSize={12}
          value={this.props.selectedCity ?  this.props.selectedCity : this.state.selectedCity}
          label='Select a city'
          onChangeText={(text) => this.props.onCitySelected ? this.props.onCitySelected(text) : this.setState({ selectedCity: text})}
          data={cities}
        />
      </View>
    )
  }
}
