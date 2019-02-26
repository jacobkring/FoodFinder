import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Image } from 'react-native'
import styles from './Styles/LogoTitleStyle'
import { Images } from '../Themes'

export default class LogoTitle extends Component {
  render () {
    return (
      <Image
        source={Images.horizontalLogo}
        style={styles.logo}
      />
    )
  }
}
