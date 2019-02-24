import {path} from "ramda";
import ZomatoActions from "../Redux/ZomatoRedux";
import { call, put } from 'redux-saga/effects'

export function * getRestaurantCategories (api) {
  // make the call to the api
  const response = yield call(api.getCategories);
  console.log(response)
  if (response.ok) {
    const data = response.data;
    console.log(data.categories)
    yield put(ZomatoActions.categoryFetchSuccess(data.categories))
  } else {
    yield put(ZomatoActions.categoryFetchFailure())
  }
}
