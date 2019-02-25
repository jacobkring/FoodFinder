import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RestaurantListStyle'
import LogoTitle from "../Components/LogoTitle";
import CitySelector from "../Components/CitySelector";
import ZomatoActions from "../Redux/ZomatoRedux";
import RestaurantCard from "../Components/RestaurantCard";

class RestaurantList extends Component {
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
        { this.props.restaurants && this.props.restaurants.map(restaurant => {
          return <RestaurantCard restaurant={restaurant} />
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
