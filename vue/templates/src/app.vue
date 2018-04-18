<template>

<div id="app">
    <transition name="slide">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive">
            </router-view>
        </keep-alive>
    </transition>

    <transition name="slide">
        <router-view v-if="!$route.meta.keepAlive">
        </router-view>
    </transition>
</div>

</template>


<script>

import router from './router';
import store from './store';
import FastClick from 'fastclick';


export default {
    router,
    store,
    components: {
    },
    data() {
        return {}
    },
    created() {
        FastClick.attach(document.body);
    }
}

</script>


<style lang="scss">

@import "app.scss";

</style>