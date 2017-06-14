<template>
  <div id="app">
    <header-c></header-c>
    <router-view></router-view>
    <bottom-menu></bottom-menu>
  </div>
</template>

<script>
  import headerC from './components/header/head.vue'
  import bottomMenu from './components/bottom/bottom.vue'
export default {
      components:{
          headerC,
          bottomMenu
      }
}
</script>

<style lang="scss">

</style>
