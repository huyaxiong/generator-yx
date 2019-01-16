<template>
  <div id="<%= name %>-view"></div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {}
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  destroyed () {

  },
  methods: {
    init () {

    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.init(to.query))
  }
}

</script>

<style lang="scss" scoped>

@import "<%= name %>.scss";

</style>
