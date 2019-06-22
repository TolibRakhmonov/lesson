<template>
    <div>
         <div>
            <button @click="$router.go(-1)">Back</button>
        </div>
        <ul v-for="(photo, index) in findPhoto" :key="index">
            <li>
                <div>
                <h4>{{photo.title}}</h4>
                </div>
                <div>
                 <img :src="photo.thumbnailUrl" alt="Image">
                 </div>
                 <div>
                <img :src="photo.url" alt="Image">
                </div>
               
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('getPhotos')
    },
    computed: {
        findPhoto(){
            return this.$store.state.photos.filter(photo => this.$route.params.id == photo.albumId)
        }
    }
}
</script>

<style>
ul li{
    list-style: none;
}
</style>
