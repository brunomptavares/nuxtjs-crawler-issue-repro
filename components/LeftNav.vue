<template>
  <aside class="menu">
    <p class="menu-label">Navegação</p>
    <ul class="menu-list">
      <li><nuxt-link class="navbar-item" to="/">Inicio</nuxt-link></li>

      <li v-for="nivel0 in navegacao" 
        :key="nivel0._id" 
        :class='nivel0.url === $route.path ?  "is-active" : ""'>

        <nuxt-link :to="nivel0.pagina ? nivel0.url : ''">{{nivel0.entrada}}</nuxt-link>

        <ul v-if="nivel0.nivel1 && nivel0.nivel1.length > 0">
          <li v-for="nivel1 in nivel0.nivel1" 
          :key="nivel1._id" 
          :class='nivel1.url === $route.path ?  "is-active" : ""'>

            <nuxt-link :to="nivel1.pagina ? nivel1.url : ''">{{nivel1.entrada}}</nuxt-link>

            <ul v-if="nivel1.nivel2 && nivel1.nivel2.length > 0">
              <li v-for="nivel2 in nivel1.nivel2" 
              :key="nivel2._id" 
              :class='nivel2.url === $route.path ?  "is-active" : ""' >
                <nuxt-link :to="nivel2.pagina ? nivel2.url : ''">{{nivel2.entrada}}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style>

</style>

<script>
export default {
  name: 'left-nav',
  created() {
  },
  mounted() {
  },
  methods: {
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
