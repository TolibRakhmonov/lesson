<template>
    <div>
         <div>
            <button @click="$router.go(-1)">Back</button> 
        </div>
        <br>
        <div>
            <input type="text" v-model="inputText" placeholder="Search...">
        </div>
        <ul>
            <li v-for="(post, key) in filterPost" :key="key">
                <router-link :to="'/posts/' + post.id" >{{post.id}}. {{post.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputText: ""
        }
    },
    mounted(){
        this.$store.dispatch('getPosts')
    },
    computed:{
        filterPost(){
            return this.$store.state.posts
            .filter(post => post.title.toLowerCase().indexOf(this.inputText.toLowerCase()) !== -1)
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
    }
    li a{
        text-decoration: none;
    }
</style>
