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
            fetch('https://jsonplaceholder.typicode.com/' + url)
            .then(res = res.json())
            .then(data => data)
            .then(error => alert(error))
        },
        async getUsers({dispatch, commit}){
            let data = await dispatch('getApi', 'users')
            commit(data, setUsers)
        },
        async getPosts({dispatch, commit}){
            let data = await dispatch('getApi', 'posts')
            commit(data, setPosts)
        },
        async getComments({dispatch, commit}){
            let data = await dispatch('getApi', 'comments')
            commit(data, setComments)
        },
        async getTodos({dispatch, commit}){
            let data = await dispatch('getApi', 'todos')
            commit(data, setTodos)
        },
        async getAlbums({dispatch, commit}){
            let data = await dispatch('getApi', 'albums')
            commit(data, setAlbums)
        },
        async getPhotos({dispatch, commit}){
            let data = await dispatch('getApi', 'photos')
            commit(data, setPhotos)
        }
    }
})

