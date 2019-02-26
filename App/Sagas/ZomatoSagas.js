import ZomatoActions, { ZomatoSelectors } from '../Redux/ZomatoRedux'
import { call, put, select } from 'redux-saga/effects'

export const { selectCity, selectCategory } = ZomatoSelectors;

export function * getRestaurantCategories (api) {
  // make the call to the api to get the categories
  const response = yield call(api.getCategories)
  if (response.ok) {
    const data = response.data
    // yay we have data, lets pass it along to update the state
    yield put(ZomatoActions.categoryFetchSuccess(data.categories))
  } else {
    // on failure there's a flag set but I didn't implement anything with it
    yield put(ZomatoActions.categoryFetchFailure())
  }
}

export function * getRestaurants(api, action) {
  // using a selector to grab the currently selected city and pass it along to the appropriate request
  const city = yield select(selectCity)
  const category = action.category
  // the category was selected when a user went to a particular page so we just passed it along from that user's click
  // I will note that I don't see any difference in results when the category changes so i
  const response = yield call(api.getRestaurants, [city, category])
  console.log(response)
  if (response.ok) {
    const data = response.data
    console.log(data)
    yield put(ZomatoActions.restaurantFetchSuccess(data.restaurants))
  }
}

export function * setCity (action) {
  console.log(action)
  yield put(ZomatoActions.setCity(action.city))
}
