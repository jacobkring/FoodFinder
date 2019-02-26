import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
  cardContent: {
    padding: 5
  },
  contentContainer: {
    flexDirection: 'row'
  },
  restaurantInformationContainer: {
    flex: 1,
    marginLeft: 5
  },
  restaurantNameText: {
    fontSize: 16
  },
  cuisineText: {
    color: 'rgb(128,128,128)',
    fontSize: 12
  },
  costRatingsContainer: {
    flex: 1,
    margin: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  restaurantThumb: {
    width: 65,
    height: 65
  }
})
