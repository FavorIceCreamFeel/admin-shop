<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from '@/views/Home'
import Login from '@/views/Login'

export default {
  name: 'app',
  components: {
    Home,
    Login,
  },
  methods:{
  }
}
</script>

<style>
</style>
