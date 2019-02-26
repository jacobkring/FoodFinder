// @flow
import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import styles from './Styles/CategoryCardStyle'

import { Card, Title } from 'react-native-paper'

type Props = {
  onPress: Function,
  category: string
}

export default class CategoryCard extends Component<Props> {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Card style={styles.container}>
          <Card.Content>
            <Title style={styles.titleStyle}>{this.props.category}</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }
}
