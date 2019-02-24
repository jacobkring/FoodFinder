import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'

import CategoryCard from './CategoryCard'

storiesOf('CategoryCard')
  .add('Default', () => (
    <CategoryCard category="Nightlife"/>
  ))


