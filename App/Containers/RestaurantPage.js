// @flow
import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Linking } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-paper'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RestaurantPageStyle'
import LogoTitle from '../Components/LogoTitle'

type Props = {
  navigation: Object,
}

class RestaurantPage extends Component<Props> {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerMode: 'card'
  };
  handleLinkClick (restaurantUrl) {
    Linking.canOpenURL(restaurantUrl).then(supported => {
      if (supported) Linking.openURL(restaurantUrl)
    }).catch((err) => console.log("Can't open the link.."))
  }

  render () {
    const { restaurant } = this.props.navigation.state.params
    console.log(restaurant)
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <View style={{ flex: 0.5 }}>
          <Image
            style={{flex: 1, height: undefined, width: undefined}}
            source={{uri: restaurant.featured_image}}
            resizeMode='cover'
          />
        </View>
        <View style={ styles.infoContainer }>
          <Text style={styles.restaurantAddress}>{restaurant.location.address}</Text>
          <Button onPress={() => this.handleLinkClick(restaurant.menu_url)}>View Menu</Button>
          { restaurant.events_url && <Button onPress={() => this.handleLinkClick(restaurant.events_url)}>View Events</Button>}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage)
