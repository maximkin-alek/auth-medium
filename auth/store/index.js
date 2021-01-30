import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        "posts": [],
        "users": [],
        "loggedUser": {},
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },

        getUsers(state) {
            return state.users;
        },

        getLoggedUser(state) {
            return state.loggedUser;
        },


    },

    mutations: {
        setState(state, { name, value }) {
            return (state[name] = value);
        },
    },

    actions: {
        fetchPosts(state) {
            axios.get('http://localhost:3000/posts')
                .then((res) => {
                    return state.commit('setState', {
                        name: 'posts',
                        value: res.data,
                    });

                })
                .catch((err) => { console.log(err) });
        },

        fetchUsers(state) {
            axios.get('http://localhost:3000/users')
                .then((res) => {
                    return state.commit('setState', {
                        name: 'users',
                        value: res.data,
                    });

                })
                .catch((err) => { console.log(err) });
        },
        login(state, { email }) {
            const user = state.state.users.find((user) => { 
               return user.login === email });
            return state.commit('setState', {
                name: 'loggedUser',
                value: user,
            });
        }

    }
});
export default store