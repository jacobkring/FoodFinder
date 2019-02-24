import React from 'react'
import { storiesOf } from '@storybook/react-native'

import RestaurantCard from './RestaurantCard'

storiesOf('RestaurantCard')
  .add('Default', () => (
    <RestaurantCard
      cost="$"
      cuisine="American"
      name="Jimmy Johns"
      rating={3.7}
    />
  ))
