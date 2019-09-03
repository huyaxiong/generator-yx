<template>
  <div id="app">
    <transition name="slide">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>

    <transition name="slide">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
  </div>
</template>

<script>

import router from './router'
import store from './store'
import FastClick from 'fastclick'
import { init } from './common/config'

export default {
  router,
  store,
  components: {
  },
  created () {
    FastClick.attach(document.body)
    FastClick.prototype.focus = (ele) => {
      ele.focus()
    }
    init()
  }
}

</script>

<style lang="scss">

@import "app.scss";

</style>
