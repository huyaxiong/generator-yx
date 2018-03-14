<template>

<div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
        </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
</div>

</template>


<script>

import axios from 'axios';
import ghost from './common/ghost';
import router from './router';
import store from './store';


export default {
    router,
    store,
    components: {},
    data: function () {
        return {}
    },
    mounted: function () {
    }
}

</script>


<style lang="scss">

@import "app.scss";

</style>