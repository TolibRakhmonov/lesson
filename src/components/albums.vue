<template>
    <div>
         <div>
            <button @click="$router.go(-1)">Back</button>
        </div><br>
        <div>
            <input type="text" placeholder="Search..." v-model="albumText">
        </div>
        <ul v-for="(album, index) in filterAlbum" :key="index">
            <li><router-link :to="'/albums/' + album.id">{{album.id}}. {{album.title}}</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            albumText: ""
        }
    },
    mounted(){
        this.$store.dispatch('getAlbums')
    },
    computed: {
        filterAlbum(){
            return this.$store.state.albums
            .filter(album => album.title.toLowerCase().indexOf(this.albumText.toLowerCase()) !== -1)
        }
    }
}
</script>

<style>
ul li{
    list-style: none;
}
ul li a{
    text-decoration: none;
}
</style>
