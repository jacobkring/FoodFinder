import {StyleSheet, View} from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
  },
  restaurantAddress: {
    fontSize: 15,
    marginLeft: 15
  },
  infoContainer: {
    flex: .5,
    marginTop: 15,
    alignItems: 'flex-start',
    flexDirection: 'column'
  }

})
