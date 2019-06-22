<template>
    <div>
        <div>
            <input type="text" v-model="textInput" placeholder="Search...">
        </div><br>
         <div>
            <button @click="$router.go(-1)">Back</button>
        </div>
        <ul v-for="(todo, index) in filterTodo" :key="index">
            <li>
                <div>
                {{todo.id}}. {{todo.title}}
                </div>
                <div>
                    {{todo.completed ? "Completed" : "Not Completed"}}
                </div>

            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
    return{
        textInput: ""
    }
},
    mounted(){
        this.$store.dispatch('getTodos')
    },
    computed:{
        filterTodo(){
            return this.$store.state.todos
            .filter(todo => todo.title.toLowerCase().indexOf(this.textInput.toLowerCase()) !== -1)
        }
    }
}
</script>

<style>

</style>
