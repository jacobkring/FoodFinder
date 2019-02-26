import { takeLatest, takeEvery, take, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { ZomatoTypes } from '../Redux/ZomatoRedux'

/* ------------- Sagas ------------- */

import { getRestaurantCategories, setCity, getRestaurants } from './ZomatoSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(ZomatoTypes.CATEGORY_FETCH_REQUEST, getRestaurantCategories, api),
    take(ZomatoTypes.SET_CITY, setCity),
    takeLatest(ZomatoTypes.RESTAURANT_FETCH_REQUEST, getRestaurants, api)
  ])
}
