<template>
    <div >      
     <increment  />
      <increment  />
       <increment  />
        <increment  />
    </div>
</template>

<script>

export default {
  name: 'app',

  components:{
      counter: () => import('./components/counter'),
      increment: () => import('./components/increment')
  }
}
</script>


<style>


</style>
