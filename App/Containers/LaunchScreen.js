//@flow
import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { Button } from 'react-native-paper';
// Styles
import styles from './Styles/LaunchScreenStyles'
import LogoTitle from "./StorybookContainer";

export default class LaunchScreen extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    header: null
  };
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.props.navigation.navigate('CategoryContainer')}
              color="rgb(227,93,93)"
              icon="view-list"
              mode="contained"
              style={styles.buttonStyle}>
              Goto Restaurant Categories
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('StorybookContainer')}
              color="rgb(227,93,93)"
              icon="book"
              mode="contained"
              style={styles.buttonStyle}>
              Goto Storybook
            </Button>
          </View>
        </ScrollView>
      </View>
    )
  }
}
