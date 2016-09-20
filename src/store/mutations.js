import {
  SET_LOCATION,
  SET_OPEN,
  SET_DISTANCE,
  SET_CENTER,
  INIT_RECYCLING_CENTERS,
  SET_LAW,
  SET_QUERY,
  SET_RESULTS,
  SET_VISIBLE_RESULTS,
  APPEND_VISIBLE_RESULTS,
  INIT,
  LOADING
} from 'src/store/actions'

import { OPEN_LOCATIONS, CLOSED_LOCATIONS } from 'src/store/constants'

export default {
  [INIT_RECYCLING_CENTERS] (state, recyclingCenters) {
    state.allCenters = recyclingCenters
    state.recyclingCenters = recyclingCenters
  },
  [SET_LOCATION] (state, { latitude, longitude, name }) {
    if (!state.defaultCoordinates) {
      state.defaultCoordinates = { latitude, longitude, name }
    }

    state.coordinates = { latitude, longitude, name }
    state.recyclingCenters = updateRecyclingCenters(state)
  },
  [SET_OPEN] (state, open) {
    state.filters = {
      ...state.filters,
      open
    }

    state.recyclingCenters = updateRecyclingCenters(state)
  },
  [SET_DISTANCE] (state, distance) {
    state.filters = {
      ...state.filters,
      distance
    }

    state.recyclingCenters = updateRecyclingCenters(state)
  },
  [SET_CENTER] (state, centerId) {
    state.selectedCenter = centerId
  },

  [SET_LAW] (state, law) {
    state.law = law
  },

  [SET_QUERY] (state, query) {
    const parts = query.split(' ').filter(e => e.length > 0)
    const qregex = new RegExp('(' + parts.join('|') + ')', 'gi')
    state.query = parts
    state.qregex = qregex
  },

  [SET_RESULTS] (state, results) {
    state.results = results
  },

  [SET_VISIBLE_RESULTS] (state, results) {
    state.visible_results = results
  },

  [APPEND_VISIBLE_RESULTS] (state, results) {
    state.results.push(...results)
  },

  [INIT] (state, data) {
    console.log('Initialize all laws' + data.slice(0, 10))
    state.allLaws = data
    state.results = data.slice(0, 50)
  },

  [LOADING] (state, loading) {
    state.loading = loading
  }

}

function updateRecyclingCenters (state) {
  return state.allCenters.filter(openFilter(state.filters.open))
    .filter(distanceFilter(state.coordinates, state.filters.distance))
    .sort(sortByDistance(state.coordinates))
}

function openFilter (value) {
  const today = new Date()

  return (l) => {
    if (value === OPEN_LOCATIONS) {
      return l.isOpen(today)
    } else if (value === CLOSED_LOCATIONS) {
      return !l.isOpen(today)
    }

    return true
  }
}

function distanceFilter ({ latitude, longitude }, value) {
  return (l) => {
    if (typeof value !== 'number') {
      return true
    }

    return l.getDistance(latitude, longitude) < value
  }
}

function sortByDistance ({ latitude, longitude }) {
  return (l1, l2) => {
    if (l1.getDistance(latitude, longitude) < l2.getDistance(latitude, longitude)) {
      return -1
    }

    return 1
  }
}
