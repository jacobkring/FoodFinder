import ZomatoActions from "../Redux/ZomatoRedux";
import { call, put } from 'redux-saga/effects'

export function * getRestaurantCategories (api) {
  // make the call to the api
  const response = yield call(api.getCategories);
  console.log(response)
  if (response.ok) {
    const data = response.data;
    yield put(ZomatoActions.categoryFetchSuccess(data.categories))
  } else {
    yield put(ZomatoActions.categoryFetchFailure())
  }
}

export function * getRestaurants(api, action){
  console.log(action)
  const response = yield call(api.getRestaurants, [action.city, action.category]);
  console.log(response)
  if (response.ok) {
    const data = response.data;
    console.log(data)
    yield put(ZomatoActions.restaurantFetchSuccess(data.restaurants))
  }
}

export function * setCity (action) {
  console.log("huh", action)
}

