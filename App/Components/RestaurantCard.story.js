import React from 'react'
import { storiesOf } from '@storybook/react-native'

import RestaurantCard from './RestaurantCard'

storiesOf('RestaurantCard', module)
  .add('Default', () => (
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
      onPress={() => console.log('pressed')} />
  ))
