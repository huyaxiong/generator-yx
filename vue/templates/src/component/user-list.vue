<template>

    <div>
        <h1>{{title}}</h1>
        <ul>
            <li v-for="u of userList">
                <a>{{u.name}}</a>
            </li>
        </ul>
        <router-link to="/user/4343">3434</router-link>
        <a @click="query">click me</a>
    </div>

</template>


<script>

    import {mapActions} from 'vuex'
    import {USER_QUERY} from '../store/user.type'


    export default {
        data () {
            return {
                title: 'Hello'
            }
        },
        methods: {
            query: function () {
                this.$store.dispatch(USER_QUERY, [{name: '111'}, {name: '222'}])

            }
        },
        computed: {
            userList(){
                return this.$store.state.user.userList;
            }
        }
    }
</script>


<!--<style lang="sass">-->
<!--</style>-->