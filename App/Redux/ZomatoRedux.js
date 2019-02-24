import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  categoryFetchRequest: null,
  categoryFetchSuccess: ['categories'],
  categoryFetchFailure: null
})

export const ZomatoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  categories: null,
  city: null,
  category: null
})

/* ------------- Selectors ------------- */

export const ZomatoSelectors = {
  selectCity: state => state.Zomato.city,
  selectCategory: state => state.Zomato.category
}

/* ------------- Reducers ------------- */

export const request = (state, {}) =>
  state.merge({ fetching: true, categories: null })

export const success = (state, action) => {
  const { categories } = action;
  return state.merge({ fetching: false, error: null, categories })
};

export const failure = (state) =>
  state.merge({ fetching: false, error: true, categories: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_FETCH_REQUEST]: request,
  [Types.CATEGORY_FETCH_SUCCESS]: success,
  [Types.CATEGORY_FETCH_FAILURE]: failure
})
