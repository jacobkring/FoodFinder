import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import styles from './Styles/CategoryCardStyle'

import { Card, Title } from 'react-native-paper'

export default class CategoryCard extends Component {
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
      <TouchableOpacity>
        <Card style={styles.container}>
          <Card.Content>
            <Title style={styles.titleStyle}>{this.props.category}</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }
}
