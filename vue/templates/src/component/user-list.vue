<template>

    <div>
        <h1>{{title}}</h1>
        <ul>
            <li v-for="u of userList">
                <a>{{u.name}}</a>
            </li>
        </ul>
        <a @click="linkTo('user/hugh')">Hugh</a>
    </div>

</template>


<script>

    import {mapActions} from 'vuex'
    import {USER_QUERY} from '../store/user.type'
    import * as axios from 'axios';
    import router from '../router';


    export default {
        data () {
            return {
                title: 'Hello'
            }
        },
        methods: {
            query: function () {
                this.$store.dispatch(USER_QUERY, [{name: '111'}, {name: '222'}]);
//                axios.get('')
//                        .then((res) => {
//                            this.userList = res.data;
//                        })
//                        .catch((err) => {
//                            console.log(err);
//                        });
            },
            linkTo(path) {
                router.push(path);
            }
        },
        computed: {
            userList(){
                return this.$store.state.user.userList;
            }
        },
        created() {

            this.query();
        }
    }
</script>


<!--<style lang="sass">-->
<!--</style>-->