<template>
  <section v-if="this.page">
    <h1>{{ this.page.title }}</h1>
    <p>{{ this.page.text }}</p>
    <left-nav />
  </section>
</template>

<style lang="scss">

</style>

<script>
export default {
  name: 'dynamicPage',
  data() {
    return {
      page: null
    }
  },
  created() {
  },
  asyncData(context) {
    //console.log("asyncData")
    //console.log(context.payload)
  },
  //Nuxtjs
  async middleware({payload, store}) {
    
  },
  fetch() {
    if (process.server) {
      this.page = this.$staticAPI.getPage(this.$route.path)
    }
  },
  key(route) {
    return route.fullPath
  }
}
</script>

