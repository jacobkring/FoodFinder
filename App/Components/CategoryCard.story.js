import React from 'react'
import { storiesOf } from '@storybook/react-native'

import CategoryCard from './CategoryCard'

storiesOf('CategoryCard', module)
  .add('Default', () => (
    <CategoryCard category='Nightlife'  onPress={() => console.log('You pressed the category ' + 'Nightlife')} />
  ))
