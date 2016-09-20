<template lang="jade">
.banner

.header.banner
  div(v-if="back")
    a(v-link="back")
      img(:src="backIcon")

  h2(:class="{ 'no-back': !back }") {{ title }}


</template>

<script>
import backIcon from 'src/assets/ic_navigate.svg'

export default {
  data () {
    return {
      backIcon
    }
  },
  props: ['title', 'back']
}
</script>

<style>

.banner {
  height: 2.5rem;
}

.header {
  display: flex;
  background-color: #322E33;
  align-items: center;
  position: fixed;
  top:0px;
  width:100%;
  z-index:1;
  box-shadow: 0px 5px 5px rgba(0.5, 0.5, 0.5, 0.5);

}

.header img {
  height: 32px;
  padding: 0 5px;
}

.header h2 {
  flex: 1;
  padding: 15px 5px 15px 0;
  color: #F9F6F4;
  margin: 0;

  &.no-back {
    margin-left: 24px;
  }
}
</style>
