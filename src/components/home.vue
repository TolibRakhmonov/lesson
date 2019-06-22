<template>
    <div>
        <div>
            <h1>List of users</h1>
        </div>
        <div>
        <ul v-for="(user, index) in $store.state.users" :key="index">
            <li><router-link :to="'/users/' + user.id">{{user.name}}</router-link></li>
        </ul>

        
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('getUsers')
    }
}
</script>

<style>

</style>
