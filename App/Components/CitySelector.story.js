import React from 'react'
import { storiesOf } from '@storybook/react-native'

import CitySelector from './CitySelector'

storiesOf('CitySelector', module)
  .add('Default', () => (
    <CitySelector selectedCity={'New York'} />
  ))
