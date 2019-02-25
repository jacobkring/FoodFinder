import { createStackNavigator, createAppContainer } from 'react-navigation'
import RestaurantPage from '../Containers/RestaurantPage'
import RestaurantList from '../Containers/RestaurantList'
import StorybookContainer from '../Containers/StorybookContainer'
import CategoryContainer from '../Containers/CategoryContainer'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  RestaurantPage: { screen: RestaurantPage },
  RestaurantList: { screen: RestaurantList },
  StorybookContainer: { screen: StorybookContainer },
  CategoryContainer: { screen: CategoryContainer },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
