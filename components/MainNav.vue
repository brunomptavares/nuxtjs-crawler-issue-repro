<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">
            Inicio
          </nuxt-link>

          <template v-for="nivel0 in navegacao">
            <nuxt-link class="navbar-item" v-if="!nivel0.nivel1 || nivel0.nivel1.length == 0"  
              :class='nivel0._id === currentNivel0 ?  "active" : ""'
              :to='nivel0.url'
              :key="nivel0._id"
              :id="nivel0._id">
              {{nivel0.entrada}}
            </nuxt-link>
            <div class="navbar-item has-dropdown is-hoverable" v-else
              :key="nivel0._id"
              :id="nivel0._id">
              <a class="navbar-link" :to='nivel0.url'>{{nivel0.entrada}}</a>
              <div class="navbar-dropdown">
                <nuxt-link class="navbar-item" v-for="nivel1 in nivel0.nivel1"
                  :to='nivel1.url'
                  :key="nivel1._id"
                  :id="nivel1._id">
                  {{nivel1.entrada}}
                </nuxt-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
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
      navegacao: [],
      currentNivel0: null,
    }
  },
  methods: {
  },
  //Nuxtjs,
  fetch() {
    if (process.server) {
      this.navegacao = this.$staticAPI.navegacao
      this.currentNivel0 = this.$staticAPI.getNivel0(this.$route.path);
    }
  }
}
</script>

<style>

</style>
