<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import About from '@/views/About'
import Home from '@/views/Home'
import Login from '@/views/Login'

export default {
  name: 'app',
  components: {
    About,
    Home,
    Login,
  },
  methods:{
  }
}
</script>

<style>

</style>
