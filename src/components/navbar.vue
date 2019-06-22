<template>
    <div class="nav">
        <ul>
            <li><router-link to="/">Users</router-link></li>
            <li><router-link to="/posts">Posts</router-link></li>
            <li><router-link to="/albums">Albums</router-link></li>
            <li><router-link to="/todos">Todos</router-link></li>

        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active: "Users"
        }
    }
}
</script>

<style scoped>
    .nav{
        background-color: rgb(48, 45, 45);
        height: auto;
    }
    ul{
        padding: 20px;
    }
    ul li{
        display: inline;
        margin: 10px;
    }
    a{
        text-decoration: none;
        color: white;
    }
    .router-link-exact-active.router-link-active {
        border: 1px solid black;
        padding: 2px;
        background: rgb(231, 19, 19);
    }

</style>
