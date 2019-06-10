<template>
    <div>
        {{counter}}
       <div>
           <button @click="increment" >
               Increment+1
           </button>
           <div>
           {{even}}
           </div>
       </div>


    </div>
    
</template>
<script>
export default {
    data() {
        return{
            counter: 0
        }
    },
    methods:{
        increment(){
            return this.counter=this.counter+1
        },       
    },
    computed:{
         even (){
            return this.counter % 2 == 0 ? 'Juft':'Toq'
        }
    }
}
</script>

<style>
  
</style>


