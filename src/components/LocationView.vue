<template lang="jade">
div
  app-header(:title='location ? location.name : ""', back='/')
  div(v-if='location')
    .location-view
      .location-details
        p {{ location.address }}
        p.hours(v-for='hours in splitHours') {{ hours }}

      map(:latitude="location.geometry.y", :longitude="location.geometry.x", keep-alive)

      .location-directions
        h3
          a(target="_blank", href="{{ location.mapsLink() }}") Get Directions
</template>

<script>
import store from 'src/store'
import { setCenter } from 'src/store/actions'
import Header from 'src/components/Header'
import Map from 'src/components/Map'

export default {
  store,
  vuex: {
    actions: {
      setCenter
    }
  },
  components: {
    'app-header': Header,
    Map
  },
  computed: {
    location () {
      if (store.state.allCenters) {
        return store.state.allCenters.filter((l) =>
          l.id === store.state.selectedCenter
        )[0]
      }

      return null
    },
    splitHours () {
      return `Open ${this.location.formattedHours()}`.split('\n')
    }
  },
  route: {
    data ({ to, next }) {
      this.setCenter(+to.params.id)
      next()
    },
    canReuse: false
  }
}
</script>

<style scoped>
.location-view {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
}

.location-details {
  padding: 10px 20px;

  & p {
    line-height: 24px;
  }

  & .hours {
    margin: 0;
  }
}

.location-directions {
  text-align: center;

  & h3 {
    font-size: 22px;
    margin: 20px 0;
  }

  & a {
    display: inline-block;
    width: 100%;
    color: #2962FF;
  }
}
</style>
