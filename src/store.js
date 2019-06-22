import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        posts: [],
        comments: [],
        todos: [],
        albums: [],
        photos: []
        
    },
    mutations: {
        setUsers(state, args){
            state.users = args
        },
        setPosts(state, args){
            state.posts = args
        },
        setComments(state, args){
            state.comments = args
        },
        setTodos(state, args){
            state.todos = args
        },
        setAlbums(state, args){
            state.albums = args
        },
        setPhotos(state, args){
            state.photos = args
        }
    },
    actions: {
        getApi({}, url){
           return fetch('https://jsonplaceholder.typicode.com/' + url)
            .then(res => res.json())
            .then(data => data)
            .catch(error => alert(error))
        },
        async getUsers({dispatch, commit}){
            let data = await dispatch('getApi', 'users')
            commit('setUsers', data)
        },
        async getPosts({dispatch, commit}){
            let data = await dispatch('getApi', 'posts')
            commit('setPosts', data)
        },
        async getComments({dispatch, commit}){
            let data = await dispatch('getApi', 'comments')
            commit('setComments', data)
        },
        async getTodos({dispatch, commit}){
            let data = await dispatch('getApi', 'todos')
            commit('setTodos', data)
        },
        async getAlbums({dispatch, commit}){
            let data = await dispatch('getApi', 'albums')
            commit('setAlbums', data)
        },
        async getPhotos({dispatch, commit}){
            let data = await dispatch('getApi', 'photos')
            commit('setPhotos', data)
        }
    }
})

