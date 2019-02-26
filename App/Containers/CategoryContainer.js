import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

// Add Actions
import ZomatoActions from '../Redux/ZomatoRedux';

// Styles
import styles from './Styles/CategoryContainerStyle'
import LogoTitle from "../Components/LogoTitle";
import CitySelector from "../Components/CitySelector";
import CategoryCard from "../Components/CategoryCard";

class CategoryContainer extends Component {
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
    this.props.getCategories()
  }

  render () {
    const { categories, city } = this.props;
    return (
      <ScrollView style={styles.container}>
        {categories && categories.map( category => {
          const { id, name } = category.categories;
          return <CategoryCard key={id} onPress={() => {
            this.props.navigation.navigate('RestaurantList', { category: name })
          }} category={name} />
        })}

      </ScrollView>
    )
  }
}

const mapStateToProps = ({ zomato }) => {
  const { categories, city } = zomato;
  return {
    categories, city
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(ZomatoActions.categoryFetchRequest()),
    setCity: (newCity) => dispatch(ZomatoActions.setCity(newCity))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
