<template>
<div>
  <!--Navbar-->
  <navbar />
  <!--Home-->
  <router-view></router-view>
</div>  
</template>
<script>
export default {
components: {
 navbar: () => import("./components/navbar")
}
}
</script>

<style>

</style>
