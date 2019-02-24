import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import ZomatoActions from '../Redux/ZomatoRedux';


// Styles
import styles from './Styles/CategoryContainerStyle'
import LogoTitle from "../Components/LogoTitle";
import CitySelector from "../Components/CitySelector";
import CategoryCard from "../Components/CategoryCard";

class CategoryContainer extends Component {
  static navigationOptions = ({ navigation}) => {
    const {state} = navigation;
    if(state.params != undefined){
      return {
        headerTitle: <LogoTitle />,
        headerMode: 'card',
        headerRight: <CitySelector selectedCity={state.params.selectedCity}/>
      }
    }
  };

  componentDidMount(){
    this.props.navigation.setParams({ selectedCity: this.props.selectedCity })
    this.props.getCategories()
  }

  render () {
    const { categories } = this.props;
    return (
      <ScrollView style={styles.container}>
        {categories && categories.map( category => {
          const { id, name } = category.categories;
          return <CategoryCard onClick={() => this.props.navigation.navigate()} category={name} />
        })}

      </ScrollView>
    )
  }
}

const mapStateToProps = ({ zomato }) => {
  const { categories } = zomato;
  return {
    categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(ZomatoActions.categoryFetchRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
