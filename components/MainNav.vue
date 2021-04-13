<template>
  <nav>
    <ul> 
      <li><router-link to='/'>Home</router-link></li>
      <li v-for="nivel0 in navMenuNivel0" :key="nivel0._id" :id="nivel0._id" :class='nivel0._id === currentNivel0 ?  "active" : ""'>
        <a>{{nivel0.entry}}</a>
        <ul>
          <li v-for="nivel1 in nivel0.navMenuNivel1" :key="nivel1._id" :id="nivel1._id">
            <NuxtLink :to='nivel1.url'>{{nivel1.entry}}</NuxtLink></li>
        </ul>
      </li>
      <li ><router-link to='/contacts'>Contacts</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'main-nav',
  //Vue hooks
  async created() {
  },
  beforeDestroy() { 
  },
  mounted() {
  },
  data() {
    return {
      navMenuNivel0: [],
      currentNivel0: null,
    }
  },
  methods: {
  },
  //Nuxtjs,
  fetch() {
    if (process.server) {
      this.navMenuNivel0 = this.$staticAPI.navMenuRoutes
      this.currentNivel0 = this.$staticAPI.getNivel0(this.$route.path);
    }
  }
}
</script>

<style>

</style>
