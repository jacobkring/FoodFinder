// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './Styles/CitySelectorStyle'

import { Dropdown } from 'react-native-material-dropdown';

type Props = {
  onCitySelected?: Function,
  selectedCity?: string
}

export default class CitySelector extends Component<Props> {
  render () {
    const cities = [
      { value: 'New York' },
      { value: 'Pittsburgh' }
    ]

    return (
      <View style={styles.selectorStyle}>
        <Dropdown
          dropdownPosition={0}
          fontSize={12}
          value={this.props.selectedCity}
          label='Select a city'
          onChangeText={this.props.onCitySelected}
          data={cities}
        />
      </View>
    )
  }
}
