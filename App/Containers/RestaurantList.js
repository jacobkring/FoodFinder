import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions
import ZomatoActions from "../Redux/ZomatoRedux";

import { TextInput } from 'react-native-paper';

// Styles
import styles from './Styles/RestaurantListStyle'
import LogoTitle from "../Components/LogoTitle";
import CitySelector from "../Components/CitySelector";
import RestaurantCard from "../Components/RestaurantCard";

class RestaurantList extends Component {
  state = {
    text: ''
  };
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    if(state.params != undefined){
      return {
        headerTitle: <LogoTitle />,
        headerMode: 'card',
        headerRight: <CitySelector selectedCity={state.params.selectedCity} onCitySelected={(city) => state.params.setCity(city)}/>
      }
    } else {
      return {
        headerTitle: <LogoTitle />,
        headerMode: 'card',
        headerRight: <CitySelector/>
      }
    }
  };

  componentDidMount(){
    if (this.props.navigation) this.props.navigation.setParams({ selectedCity: this.props.city, setCity: this.props.setCity });
    this.props.getRestaurants(this.props.city, this.props.navigation.state.params.category)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.city !== this.props.city)
      this.props.getRestaurants(nextProps.city, nextProps.navigation.state.params.category)
  }

  render () {
    const { category, id } = this.props.navigation.state.params;
    console.log(category)
    console.log(this.props.restaurants)
    return (
      <ScrollView style={styles.container}>
        <TextInput style={{ color: "rgb(227,93,93)", margin: 5 }} underlineColor="rgb(227,93,93)" label={'Search'} value={this.state.text} onChangeText={text => this.setState({ text })}/>
        { this.props.restaurants && this.props.restaurants.filter(restaurant => this.state.text.length > 1 ? restaurant.restaurant.name.toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1 : true).map(restaurant => {
          return <RestaurantCard key={restaurant.restaurant.deeplink} restaurant={restaurant} />
        })}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ zomato }) => {
  const { city, restaurants } = zomato;
  return {
    city, restaurants
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCity: (newCity) => dispatch(ZomatoActions.setCity(newCity)),
    getRestaurants: (city, category) => dispatch(ZomatoActions.restaurantFetchRequest(city, category))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
