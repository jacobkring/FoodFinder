import React from 'react'
import { storiesOf } from '@storybook/react-native'

import StarRating from './StarRating'

storiesOf('StarRating', module)
  .add('Default', () => (
    <StarRating
      rating={3.7}
    />
  ))

