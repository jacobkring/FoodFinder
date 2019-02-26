import 'react-native'
import React from 'react'
import RestaurantCard from '../../App/Components/RestaurantCard'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import PropTypes from "prop-types";

test('RestaurantCard component renders correctly', () => {
  const tree = renderer.create(
    <RestaurantCard
      restaurant={{
        restaurant: {
          name: 'AWESOME RESTAURANT',
          cuisines: 'BEST CUISINES',
          user_rating: {
            aggregate_rating: 4.2,
            rating_text: 'Very Good'
          },
          location: {
            address: 'TOP PLACE'
          },
          price_range: 1,
          thumb: 'https://b.zmtcdn.com/data/res_imagery/16777320_RESTAURANT_5bc92fcf35438e2404eb918270b2ea2c.jpg'
        }
      }}
      onPress={() => {}} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('onPress', () => {
  let i = 0 // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++
  const wrapperPress = shallow(<RestaurantCard restaurant={{
    restaurant: {
      name: 'AWESOME RESTAURANT',
      cuisines: 'BEST CUISINES',
      user_rating: {
        aggregate_rating: 4.2,
        rating_text: 'Very Good'
      },
      location: {
        address: 'TOP PLACE'
      },
      price_range: 1,
      thumb: 'https://b.zmtcdn.com/data/res_imagery/16777320_RESTAURANT_5bc92fcf35438e2404eb918270b2ea2c.jpg'
    }
  }} onPress={onPress} />)

  expect(wrapperPress.prop('onPress')).toBe(onPress) // uses the right handler
  expect(i).toBe(0)
  wrapperPress.simulate('press')
  expect(i).toBe(1)
})
