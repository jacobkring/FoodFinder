import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  categoryFetchRequest: null,
  categoryFetchSuccess: ['categories'],
  categoryFetchFailure: null,
  setCity: ['city'],
  restaurantFetchRequest: ['category'],
  restaurantFetchSuccess: ['restaurants']
})

export const ZomatoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  categories: null,
  city: 'New York',
  category: null,
  restaurants: null
})

/* ------------- Selectors ------------- */

export const ZomatoSelectors = {
  selectCity: state => state.zomato.city,
  selectCategory: state => state.zomato.category
}

/* ------------- Reducers ------------- */

export const request = (state, {}) =>
  state.merge({ fetching: true, categories: null })

export const success = (state, action) => {
  const { categories } = action
  return state.merge({ fetching: false, error: null, categories })
};

export const failure = (state) =>
  state.merge({ fetching: false, error: true, categories: null })

export const setCity = (state, { city }) => state.merge({ city })

export const fetchRestaurants = (state) => state.merge({ fetching: true, restaurants: null })
export const fetchRestaurantsSuccess = (state, { restaurants }) => state.merge({ fetching: false, error: null, restaurants })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_FETCH_REQUEST]: request,
  [Types.CATEGORY_FETCH_SUCCESS]: success,
  [Types.CATEGORY_FETCH_FAILURE]: failure,
  [Types.SET_CITY]: setCity,
  [Types.RESTAURANT_FETCH_REQUEST]: fetchRestaurants,
  [Types.RESTAURANT_FETCH_SUCCESS]: fetchRestaurantsSuccess
})
