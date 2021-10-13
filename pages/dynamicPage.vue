<template>
  <section v-if="this.pagina">
    <h1 class="title">{{ this.pagina.titulo }}</h1>
    <h2 class="subtitle">{{ this.pagina.subTitulo }}</h2>
    <span class="content" v-html="this.pagina.corpoHTML"/>
  </section>
</template>

<style lang="scss">

</style>

<script>
export default {
  name: 'dynamicPage',
  data() {
    return {
      pagina: null
    }
  },
  created() {
  },
  asyncData(context) {
    //console.log("asyncData")
    console.log(context.payload)
  },
  //Nuxtjs
  async middleware({payload, store}) {
    //console.log(payload)
  },
  fetch() {
    if (process.server) {
      this.pagina = this.$staticAPI.getPagina(this.$route.path)
      //console.log(this.pagina)
    }
  },
  key(route) {
    return route.fullPath
  }
}
</script>

