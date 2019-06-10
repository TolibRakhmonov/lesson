<template>
    <div>
      <div>
        {{counter}}
      </div>
      <button @click="increment">
        increment + 1
      </button>

      <div>
        {{juftmi}}
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
        this.counter += 1
        }
    },

    computed: {
        juftmi() {
        return this.counter % 2 == 0 ? 'juft' : 'toq'
        }
    }
}
</script>
