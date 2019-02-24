import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Image } from 'react-native'
import styles from './Styles/LogoTitleStyle'
import { Images } from "../Themes";

export default class LogoTitle extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <Image
        source={Images.horizontalLogo}
        style={styles.logo}
      />
    )
  }
}
