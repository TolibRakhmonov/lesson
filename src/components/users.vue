<template>
    <div>
        <div>
            <button @click="this.$route.go(-1)">Back</button>
        </div>
       <ul>
           <li>Id: {{findUser.id}}</li>
           <li>Name: {{findUser.name}}</li>
           <li>E-mail: {{findUser.email}}</li>
           <li>Phone: {{findUser.phone}}</li>
       </ul>
       <hr>
       
       <div class="raw">
            <!--Posts which are belong to user-->
           <div class="col">
               <div class="title"><h2>Posts</h2></div>
               <div>
                   <ul v-for="(post, index) in filterPost" :key="index">
                       <li><router-link :to="'/posts/' + post.id">{{post.title}}</router-link></li>
                   </ul>
               </div>

           </div>
            <!--Albums which are belong to user-->
           <div class="col">
               <div class="title"><h2>Albums</h2></div>
                <div>
                   <ul v-for="(album, index) in filterAlbum" :key="index">
                       <li><router-link :to="'/albums/' + album.id">{{album.title}}</router-link></li>
                   </ul>
               </div>

           </div>
            <!--Todos which are belong to user-->
           <div class="col">
               <div class="title"><h2>Todos</h2></div>
                <div>
                   <ul v-for="(todo, index) in filterTodo" :key="index">
                       <li>{{todo.title}}</li>
                       <li>{{todo.completed}}</li>
                   </ul>
               </div>
           </div>
       </div>

    </div>
</template>

<script>
export default {
   computed: {
       findUser(){
           return this.$store.state.users.find(user => user.id == this.$route.params.id)
       },
       filterPost(){
           return this.$store.state.posts.filter(post => post.userId == this.$route.params.id)
       },
       filterAlbum(){
           return this.$store.state.albums.filter(album => album.userId == this.$route.params.id)
       },
       filterTodo(){
           return this.$store.state.todos.filter(todo => todo.userId == this.$route.params.id)
       }
   },
   mounted() {
       this.$store.dispatch('getUsers'),
       this.$store.dispatch('getPosts'),
       this.$store.dispatch('getAlbums'),
       this.$store.dispatch('getTodos')
   }
}
</script>

<style scoped>
    .raw {
        display: table;
        
    }
    .col {
        display: table-cell;
        width: 300px;
    }
    .title{
        text-align: center;
        width: 300px;
    }
    ul li{
        list-style: none;
    }
    ul li a{
        text-decoration: none;
    }
</style>
