export const SET_LOCATION = 'SET_LOCATION'
export const SET_OPEN = 'SET_OPEN'
export const SET_DISTANCE = 'SET_DISTANCE'
export const SET_CENTER = 'SET_CENTER'
export const INIT_RECYCLING_CENTERS = 'INIT_RECYCLING_CENTERS'

export const SET_LAW = 'HRS_SET_LAW'
export const SET_QUERY = 'HRS_SET_QUERY'
export const SET_RESULTS = 'HRS_SET_RESULTS'
export const SET_VISIBLE_RESULTS = 'HRS_SET_VISIBLE_RESULTS'
export const APPEND_VISIBLE_RESULTS = 'HRS_APPEND_VISIBILE_RESULTS'
export const INIT = 'HRS_INIT'
export const LOADING = 'LOADING'

export const setLocation = ({ dispatch }, location) => dispatch(SET_LOCATION, location)
export const setOpen = ({ dispatch }, open) => dispatch(SET_OPEN, open)
export const setDistance = ({ dispatch }, distance) => dispatch(SET_DISTANCE, distance)
export const setCenter = ({ dispatch }, recyclingCenter) => dispatch(SET_CENTER, recyclingCenter)
export const initRecyclingCenters = ({ dispatch }, recyclingCenters) => dispatch(INIT_RECYCLING_CENTERS, recyclingCenters)

export const hrsActions = {
  setLaw: ({ dispatch }, law) => dispatch(SET_LAW, law),
  setQuery: ({ dispatch }, query) => dispatch(SET_QUERY, query),
  setResults: ({ dispatch }, results) => dispatch(SET_RESULTS, results),
  setVisibleResults: ({ dispatch }, results) => dispatch(SET_VISIBLE_RESULTS, results),
  appendVisibleResults: ({ dispatch }, results) => dispatch(APPEND_VISIBLE_RESULTS, results),
  init: ({ dispatch }, data) => dispatch(INIT, data),
  setLoading: ({dispatch}, loading) => dispatch(LOADING, loading)
}
