import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'

import CitySelector from './CitySelector'

storiesOf('CitySelector')
  .add('Default', () => (
    <CitySelector selectedCity={"New York"}/>
  ))


