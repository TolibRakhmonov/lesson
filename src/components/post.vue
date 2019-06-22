<template>
    <div>
         <div>
            <button @click="$router.go(-1)">Back</button>
        </div>
        <div>
        <h3>
            {{findPost.title}}
        </h3>
        <p>
            {{findPost.body}}
        </p>
        </div>
        <div>
            <h1>Comments</h1>
        </div>
        <div>
            <ul v-for="(comment, index) in filterComment" :key="index">
                <li><h3>{{comment.name}}</h3></li>
                <li><b>{{comment.email}}</b></li>
                <li><p>{{comment.body}}</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
mounted(){
    this.$store.dispatch('getPosts'),
    this.$store.dispatch('getComments')
},
computed: {
    findPost(){
        return this.$store.state.posts.find(post => post.id == this.$route.params.id)
    },
    filterComment(){
        return this.$store.state.comments.filter(comment => comment.postId == this.$route.params.id)
    }
}
}
</script>

<style scoped>
    ul li{
        list-style: none;
    }
</style>
